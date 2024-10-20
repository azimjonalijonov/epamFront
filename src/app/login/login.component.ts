
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  signInForm: FormGroup;
  passwordVisible = false;
  loginFailed =false;

  constructor(private formBuilder: FormBuilder, private userService: AuthService,private router: Router) {
    this.signInForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  onSubmit() {
    // if (this.signInForm.invalid) {
    //   alert('Login failed!');
    // }
    const username = this.signInForm.value.username;
    const password = this.signInForm.value.password;
    if (this.userService.login(username, password)) {
      alert('Login successful!');
      this.router.navigate(['/my-account']);

      // Redirect or perform further actions
    } else {
      alert('Login failed!');
    }
   }
}
