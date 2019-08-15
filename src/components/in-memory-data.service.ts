import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Clinical} from './app/clinical';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const clinical = [
      {id: 1, name: 'Abdominal Pain', whatCauses: 'test', symptons: 'test', treatment:'test'},
      {id: 2, name: 'Ankle Sprain', whatCauses: 'test', symptons: 'test', treatment:'test'},
      {id: 3, name: 'Back Pain', whatCauses: 'test', symptons: 'test', treatment:'test'},
      {id: 4, name: 'Burns', whatCauses: 'test', symptons: 'test', treatment:'test'},
      {id: 5, name: 'Colds and Flu', whatCauses: 'test', symptons: 'test', treatment:'test'},
      {id: 6, name: 'Fracture', whatCauses: 'test', symptons: 'test', treatment:'test'},
    ];
    return {clinical};
  }
  constructor() { }
  genId(clinical: Clinical[]): number {
    return clinical.length > 0 ? Math.max(...clinical.map(res => res.id)) + 1 : 11;
  }
}
