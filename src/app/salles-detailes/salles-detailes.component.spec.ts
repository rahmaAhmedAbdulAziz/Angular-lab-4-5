import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SallesDetailesComponent } from './salles-detailes.component';

describe('SallesDetailesComponent', () => {
  let component: SallesDetailesComponent;
  let fixture: ComponentFixture<SallesDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SallesDetailesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SallesDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
