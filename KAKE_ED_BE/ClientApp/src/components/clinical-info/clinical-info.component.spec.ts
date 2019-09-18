import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalInfoComponent } from './clinical-info.component';

describe('ClinicalInfoComponent', () => {
  let component: ClinicalInfoComponent;
  let fixture: ComponentFixture<ClinicalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
