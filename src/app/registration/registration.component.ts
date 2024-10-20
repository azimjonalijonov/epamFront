import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']  
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  isStudent = true;
  isTrainer = false;
  submitted = false;
  showCredentials = false;
  generatedUsername = '';
  generatedPassword = '';

  constructor(private fb: FormBuilder,private auth: AuthService ) {
    this.registrationForm = this.fb.group({
      role: ['Student'],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: [''],
      address: [''],
      specialization: ['', Validators.required],
    });

    this.onRoleChange(); 
  }

  onRoleChange(): void {
    const selectedRole = this.registrationForm.get('role')?.value;
    this.isStudent = selectedRole === 'Student';
    this.isTrainer = selectedRole === 'Trainer';

    if (this.isStudent) {
      this.registrationForm.get('dob')?.setValidators([]);
      this.registrationForm.get('address')?.setValidators([]);
      this.registrationForm.get('specialization')?.clearValidators();
    } else {
      this.registrationForm.get('specialization')?.setValidators([Validators.required]);
    }

    this.registrationForm.get('specialization')?.updateValueAndValidity();
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.registrationForm.invalid) {
      return;
    }

    this.generatedUsername = `${this.registrationForm.value.firstName.toLowerCase()}_user`;
    this.generatedPassword = 'generatedPassword123';
    this.auth.registerUser(this.generatedUsername, this.generatedPassword);
    this.showCredentials = true;
  }
}

