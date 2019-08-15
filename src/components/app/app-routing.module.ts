import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClinicalInfoComponent } from '../clinical-info/clinical-info.component';
import { GeneralInfoComponent} from '../general-info/general-info.component';
import { HomeComponent} from '../home/home.component';
import {FeedbackComponent } from '../feedback/feedback.component'; 
import {ContactComponent} from '../contact/contact.component';
import {IndividualClinicalComponent} from '../individual-clinical/individual-clinical.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'clinical', component: ClinicalInfoComponent },
  { path: 'general', component: GeneralInfoComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'detail/:id', component: IndividualClinicalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
