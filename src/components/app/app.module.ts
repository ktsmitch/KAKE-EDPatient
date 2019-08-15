import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { HttpClientModule }    from '@angular/common/http';
import { InMemoryDataService } from '../in-memory-data.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
