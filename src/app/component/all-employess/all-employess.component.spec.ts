import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEmployessComponent } from './all-employess.component';

describe('AllEmployessComponent', () => {
  let component: AllEmployessComponent;
  let fixture: ComponentFixture<AllEmployessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllEmployessComponent]
    });
    fixture = TestBed.createComponent(AllEmployessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
