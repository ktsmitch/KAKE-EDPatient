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
        symptons: ['', [Validators.required]],
        treatment: ['', [Validators.required]],
        homeCare: ['', [Validators.required]],
        whatToExpect: ['', [Validators.required]],
        seekingHelp: ['', [Validators.required]],
        wantToKnowMore: ['', [Validators.required]],
        waysToReduce: ['', [Validators.required]],
        followUp: ['', [Validators.required]],
        prevention: ['', [Validators.required]],
        whyDoesThisHappen: ['', [Validators.required]],
        returnImmedIf: ['', [Validators.required]],
        instructions: ['', [Validators.required]],
        whyIsItAProb: ['', [Validators.required]],
        whatShouldIDo: ['', [Validators.required]],
        howIsItSpread: ['', [Validators.required]],
        stoppingSpread: ['', [Validators.required]],
        probsToWatchFor: ['', [Validators.required]],

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
      get symptons() { return this.clinicalForm.get('symptons'); }
      get treatment() { return this.clinicalForm.get('treatment'); }
      get homeCare() { return this.clinicalForm.get('homeCare'); }
      get whatToExpect() { return this.clinicalForm.get('whatToExpect'); }
      get seekingHelp() { return this.clinicalForm.get('seekingHelp'); }
      get wantToKnowMore() { return this.clinicalForm.get('wantToKnowMore'); }
      get waysToReduce() { return this.clinicalForm.get('waysToReduce'); }
      get followUp() { return this.clinicalForm.get('followUp'); }
      get prevention() { return this.clinicalForm.get('prevention'); }
      get whyDoesThisHappen() { return this.clinicalForm.get('whyDoesThisHappen'); }
      get returnImmedIf() { return this.clinicalForm.get('returnImmedIf'); }
      get instructions() { return this.clinicalForm.get('instructions'); }
      get whyIsItAProb() { return this.clinicalForm.get('whyIsItAProb'); }
      get whatShouldIDo() { return this.clinicalForm.get('whatShouldIDo'); }
      get howIsItSpread() { return this.clinicalForm.get('howIsItSpread'); }
        get stoppingSpread() { return this.clinicalForm.get('stoppingSpread'); }
      get probsToWatchFor() { return this.clinicalForm.get('probsToWatchFor'); }
    
}
