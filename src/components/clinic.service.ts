import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Clinical } from './app/clinical';
import {CLINICNFO} from './app/mock-info';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  constructor() { }

  getClinic(id: number): Observable<Clinical> {
    return of(CLINICNFO.find(clinical => clinical.id === id));
  }
}
