import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Clinical} from './app/clinical';

@Injectable({
  providedIn: 'root'
})

// replace with link to backend SQL service
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const clinical = [
      {id: 1, name: 'Abdominal Pain', whatCauses: 'test', symptons: null, treatment:'test', whatIs: null, homeCare: '', whatToExpect: '', seekingHelp: null, wantToKnowMore: '', waysToReduce:'', followUp:'', prevention:'', whyDoesThisHappen:'', returnImmedIf: null, instruct: null, whyIsItProb: '', whatShouldDo: '', howSpreads:'', stoppingSpread: '', probNextFewDays: ''},
      {id: 2, name: 'Ankle Sprain', whatCauses: 'test', symptons: 'test', treatment:'test', whatIs:'', homeCare: '', whatToExpect: '', seekingHelp: '', wantToKnowMore: '', waysToReduce:null, followUp:'', prevention:'', whyDoesThisHappen:'', returnImmedIf: '', instruct: '', whyIsItProb: null, whatShouldDo: '', howSpreads:'', stoppingSpread: '', probNextFewDays: ''},
      {id: 3, name: 'Back Pain', whatCauses: 'test', symptons: null, treatment:'test', whatIs:null, homeCare: null, whatToExpect: '', seekingHelp: '', wantToKnowMore: null, waysToReduce:'', followUp:'', prevention:null, whyDoesThisHappen:'', returnImmedIf: '', instruct:null,  whyIsItProb: '', whatShouldDo: '', howSpreads:'', stoppingSpread: null, probNextFewDays: ''},
      {id: 4, name: 'Burns', whatCauses: 'test', symptons: 'test', treatment:'test', whatIs:'', homeCare: '', whatToExpect: '', seekingHelp: '', wantToKnowMore: '', waysToReduce:'', followUp:'', prevention:'', whyDoesThisHappen:null, returnImmedIf: '', instruct: '', whyIsItProb: '', whatShouldDo: '', howSpreads:null, stoppingSpread: '', probNextFewDays: null},
      {id: 5, name: 'Colds and Flu', whatCauses: 'test', symptons: 'test', treatment: null, whatIs:'', homeCare: '', whatToExpect: '', seekingHelp: '', wantToKnowMore: '', waysToReduce:'', followUp:'', prevention:'', whyDoesThisHappen:'', returnImmedIf: '', instruct: null, whyIsItProb: '', whatShouldDo: null, howSpreads:'', stoppingSpread: '', probNextFewDays: ''},
      {id: 6, name: 'Fracture', whatCauses: null , symptons: 'test', treatment:'test', whatIs:'', homeCare: '', whatToExpect: '', seekingHelp: '', wantToKnowMore: '', waysToReduce:'', followUp: null, prevention:'', whyDoesThisHappen:'', returnImmedIf: '', instruct: '', whyIsItProb: '', whatShouldDo: '', howSpreads:'', stoppingSpread: '', probNextFewDays: null},
    ];
    return {clinical};
  }
  constructor() { }
  genId(clinical: Clinical[]): number {
    return clinical.length > 0 ? Math.max(...clinical.map(res => res.id)) + 1 : 11;
  }
}
