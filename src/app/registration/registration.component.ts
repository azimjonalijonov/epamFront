import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router'; 

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
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private http: HttpClient,  
    private router: Router 
  ) {
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
      this.registrationForm.get('dob')?.setValidators([]); // No validators for student
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

    const registrationData = {
      role: this.registrationForm.value.role,
      firstName: this.registrationForm.value.firstName,
      lastName: this.registrationForm.value.lastName,
      dob: this.registrationForm.value.dob,
      address: this.registrationForm.value.address,
      specialization: this.registrationForm.value.specialization,
    };

    this.http.post('https://my-backend-url.com/register', registrationData)
      .subscribe({
        next: (response: any) => {
          this.generatedUsername = `${this.registrationForm.value.firstName.toLowerCase()}_user`;
          this.generatedPassword = 'generatedPassword123'; 
          
           this.router.navigate(['/login']); 
        },
        error: (error) => {
           this.errorMessage = 'Registration failed. Please try again later.';
          console.error('Registration error:', error);
        }
      });
  }
}
