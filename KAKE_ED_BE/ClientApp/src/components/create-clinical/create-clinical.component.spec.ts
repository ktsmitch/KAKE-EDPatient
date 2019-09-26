import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClinicalComponent } from './create-clinical.component';

describe('CreateClinicalComponent', () => {
  let component: CreateClinicalComponent;
  let fixture: ComponentFixture<CreateClinicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateClinicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClinicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
