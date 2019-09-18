import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

 import {Clinical} from '../app/clinical';
 import {ClinicService} from '../clinic.service'; 

@Component({
  selector: 'app-search-clinical',
  templateUrl: './search-clinical.component.html',
  styleUrls: ['./search-clinical.component.css']
})
export class SearchClinicalComponent implements OnInit {
  clinical$: Observable<Clinical[]>; 
  private searchTerms = new Subject<string>();
  
  constructor(private clinicService: ClinicService) { }

  ngOnInit():void {
    this.clinical$ = this.searchTerms.pipe(
      debounceTime(300), //wait 300ms after each keystroke before considering the term
      distinctUntilChanged(),//ignore new term if same as previous term
      switchMap((term: string) => // swith to new search observable each time the term changes
      this.clinicService.searchClinical(term)),
    );
    
  }

  //Push a search term into the observable stream
  search(term: string): void {
    this.searchTerms.next(term); 
  }

}
