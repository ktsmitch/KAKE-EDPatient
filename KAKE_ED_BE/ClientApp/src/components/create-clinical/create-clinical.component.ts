import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {ClinicService} from '../clinic.service'; 
import {Clinical} from '../app/clinical';

@Component({
  selector: 'app-create-clinical',
  templateUrl: './create-clinical.component.html',
  styleUrls: ['./create-clinical.component.css']
})
export class CreateClinicalComponent implements OnInit {
  clinicalForm: FormGroup;
  title = 'Create';
  clincId: number;
  errorMessage: any;
  clinicalList: Clinical[];

  constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
    private _clinicService: ClinicService, private _router: Router) { 
      if (this._avRoute.snapshot.params['id']) {
        this.clincId = this._avRoute.snapshot.params['id'];
      }

      this.clinicalForm = this._fb.group({
        id: 0,
        name: ['', [Validators.required]],
        whatIs: ['', [Validators.required]],
        whatCauses: ['', [Validators.required]],
      })
    }
    

  ngOnInit() {
    this._clinicService.getAllClinic().subscribe(res =>
      this.clinicalList = res);

      if (this.clincId > 0) {
        this.title ='Edit';
        this._clinicService.getClinic(this.clincId).subscribe(res => {
          this.clinicalForm.setValue(res);
        }, error => console.error(error));
        }
      }
  
      save() {

        if (!this.clinicalForm.valid) {
          return;
        }
    
        if (this.title === 'Create') {
          this._clinicService.saveClinical(this.clinicalForm.value)
            .subscribe(() => {
              this._router.navigate(['/admin']);
            }, error => console.error(error));
        } else if (this.title === 'Edit') {
          this._clinicService.updateClinic(this.clinicalForm.value)
            .subscribe(() => {
              this._router.navigate(['/admin']);
            }, error => console.error(error));
        }
      }
    
      cancel() {
        this._router.navigate(['/admin']);
      }
    
      get name() { return this.clinicalForm.get('name'); }
      get whatIs() { return this.clinicalForm.get('whatIs'); }
      get whatCauses() { return this.clinicalForm.get('whatCauses'); }
}
