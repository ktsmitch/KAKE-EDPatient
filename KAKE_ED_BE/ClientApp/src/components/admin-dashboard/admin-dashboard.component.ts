import { Component, OnInit } from '@angular/core';
import {Clinical} from '../app/clinical';
import {ClinicService} from '../clinic.service'; 
import {DataSource} from '@angular/cdk/collections'; 
import {BehaviorSubject, Observable} from 'rxjs'; 


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  clinicalInfo: Clinical[] = [];
  dataSource: ClinicalDataSource;
  
  constructor(private clinicService: ClinicService ) { }
  
  

  getAllClinics(): void {
    this.clinicService.getAllClinic().subscribe(res => 
      res.forEach(element => {
        this.clinicalInfo.push(element);
      }));  
  }

  ngOnInit() {
    this.dataSource = new ClinicalDataSource(this.clinicService);
    this.dataSource.loadClinical();   
    this.getAllClinics(); 
  }

  delete(name, id) {
    const ans = confirm('Do you want to delete "' + name + '" from Clinical Information?');
    if (ans) { 
      this.clinicService.deleteClinical(id).subscribe(() => {
        this.getAllClinics();
      }, error => console.error(error));
    }
  }
}



//Datasource class
export class ClinicalDataSource extends DataSource<Clinical> {
  private clinicalSubject = new BehaviorSubject<Clinical[]>([]); 
  private loadingSubject = new BehaviorSubject<boolean>(false);

  constructor(private clinicService: ClinicService) {
    super();
  } 
  
  public loading$ = this.loadingSubject.asObservable();

  connect(): Observable<Clinical[]> {
    return this.clinicalSubject.asObservable();
  }

  disconnect(): void {
    this.clinicalSubject.complete(); 
    this.loadingSubject.complete();
  }

  loadClinical(){
    this.loadingSubject.next(true);
    this.clinicService.getAllClinic().subscribe(res => 
        this.clinicalSubject.next(res)
     );
  }

}
