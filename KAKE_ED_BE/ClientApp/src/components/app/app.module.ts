import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from '../home/home.component';
import { ClinicalInfoComponent } from '../clinical-info/clinical-info.component';
import { GeneralInfoComponent } from '../general-info/general-info.component';
import { FeedbackComponent } from '../feedback/feedback.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from '../contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { IndividualClinicalComponent } from '../individual-clinical/individual-clinical.component';
import { SearchClinicalComponent } from '../search-clinical/search-clinical.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from '../footer/footer.component';
import { SurveyComponent } from '../survey/survey.component';
import { SearchWebsiteComponent } from '../search-website/search-website.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { CreateClinicalComponent } from '../create-clinical/create-clinical.component';
import { LoginAdminComponent } from '../login-admin/login-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ClinicalInfoComponent,
    GeneralInfoComponent,
    FeedbackComponent,
    ContactComponent,
    IndividualClinicalComponent,
    SearchClinicalComponent,
    FooterComponent,
    SurveyComponent,
    SearchWebsiteComponent,
    AdminDashboardComponent,
    CreateClinicalComponent,
    LoginAdminComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule 

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
