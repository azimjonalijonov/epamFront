
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  signInForm: FormGroup;
  passwordVisible = false;
  loginFailed =false;

  constructor(private formBuilder: FormBuilder, private userService: AuthService,private router: Router, private http: HttpClient
  ) {
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
    const loginData=
    { username : this.signInForm.value.username,
     password :this.signInForm.value.password};
    // if (this.userService.login(username, password)) {
    //   alert('Login successful!');
    
      this.http.post('http://your-backend-url/login', loginData)
      .subscribe(
        (response: any) => {
          // Handle success (e.g., store JWT token and redirect)
          localStorage.setItem('token', response.token);
          this.router.navigate(['/my-account']);
        },
        (error) => {
          // Handle error
          alert('Login failed!');        }
      );
    //  } else {
    //   alert('Login failed!');
    // }
   }
}
