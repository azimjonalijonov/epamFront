import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationVerificationComponent } from './registration-verification.component';

describe('RegistrationVerificationComponent', () => {
  let component: RegistrationVerificationComponent;
  let fixture: ComponentFixture<RegistrationVerificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationVerificationComponent]
    });
    fixture = TestBed.createComponent(RegistrationVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
