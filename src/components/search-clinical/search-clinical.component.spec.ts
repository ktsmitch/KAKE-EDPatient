import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchClinicalComponent } from './search-clinical.component';

describe('SearchClinicalComponent', () => {
  let component: SearchClinicalComponent;
  let fixture: ComponentFixture<SearchClinicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchClinicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchClinicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
