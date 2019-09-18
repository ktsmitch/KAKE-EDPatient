import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualClinicalComponent } from './individual-clinical.component';

describe('IndividualClinicalComponent', () => {
  let component: IndividualClinicalComponent;
  let fixture: ComponentFixture<IndividualClinicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualClinicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualClinicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
