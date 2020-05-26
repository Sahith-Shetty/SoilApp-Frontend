import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoilsearchComponent } from './soilsearch.component';

describe('SoilsearchComponent', () => {
  let component: SoilsearchComponent;
  let fixture: ComponentFixture<SoilsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoilsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoilsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
