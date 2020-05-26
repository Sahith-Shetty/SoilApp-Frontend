import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoildetailsComponent } from './soildetails.component';

describe('SoildetailsComponent', () => {
  let component: SoildetailsComponent;
  let fixture: ComponentFixture<SoildetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoildetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoildetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
