import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClinicalInfoComponent } from '../clinical-info/clinical-info.component';
import { GeneralInfoComponent} from '../general-info/general-info.component';
import { HomeComponent} from '../home/home.component';
import {FeedbackComponent } from '../feedback/feedback.component'; 
import {ContactComponent} from '../contact/contact.component';
import {IndividualClinicalComponent} from '../individual-clinical/individual-clinical.component';
import { SearchWebsiteComponent } from '../search-website/search-website.component';
import {AdminDashboardComponent} from '../admin-dashboard/admin-dashboard.component';
import {CreateClinicalComponent} from '../create-clinical/create-clinical.component';
import {LoginAdminComponent} from '../login-admin/login-admin.component'; 
import { CanActivateService } from './can-activate.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'clinical', component: ClinicalInfoComponent },
  { path: 'general', component: GeneralInfoComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'search/:term', component: SearchWebsiteComponent },
  { path: 'detail/:id', component: IndividualClinicalComponent },
  { path: 'login', component: LoginAdminComponent },
  { path: 'admin', component: AdminDashboardComponent, canActivate:[CanActivateService], },
  { path: 'admin/create', component: CreateClinicalComponent, canActivate:[CanActivateService],},
  { path: 'admin/edit/:id', component: CreateClinicalComponent, canActivate:[CanActivateService],},
];  

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }

