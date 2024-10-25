import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router';  

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  changePasswordForm: FormGroup;
  submitted = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
     this.changePasswordForm = this.fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, { validator: this.passwordMatchValidator });
  }

   passwordMatchValidator(group: FormGroup) {
    const newPassword = group.get('newPassword')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return newPassword === confirmPassword ? null : { mismatch: true };
  }

   onSubmit(): void {
    this.submitted = true;

    if (this.changePasswordForm.invalid) {
      return;
    }

    const passwordData = {
      oldPassword: this.changePasswordForm.value.oldPassword,
      newPassword: this.changePasswordForm.value.newPassword,
    };

     this.http.post('https://my-backend-url.com/change-password', passwordData)  
      .subscribe({
        next: (response: any) => {
          
          this.successMessage = 'Password changed successfully';
          this.router.navigate(['/profile']); 
        },
        error: (error) => {

          this.errorMessage = 'Password change failed. Please try again.';
          console.error('Error changing password:', error);
        }
      });
  }
}
