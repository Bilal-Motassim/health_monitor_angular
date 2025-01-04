import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanMealsComponent } from './scan-meals.component';

describe('ScanMealsComponent', () => {
  let component: ScanMealsComponent;
  let fixture: ComponentFixture<ScanMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScanMealsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScanMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
