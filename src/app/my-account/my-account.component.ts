import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent {
  isEditMode: boolean = false; 
  accountForm: FormGroup;      

  constructor(private fb: FormBuilder) {
    this.accountForm = this.fb.group({
      firstName: ['John', Validators.required],
      lastName: ['Doe', Validators.required],
      email: [{ value: 'johndoe@example.com', disabled: true }, [Validators.required, Validators.email]],
      phone: ['+123456789', Validators.required]
    });
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
    if (this.isEditMode) {
      this.accountForm.get('email')?.enable();
    } else {
      this.accountForm.get('email')?.disable();
    }
  }

  onSave() {
    if (this.accountForm.valid) {
      console.log('Profile updated successfully', this.accountForm.value);
      this.toggleEditMode();  
    } else {
      console.log('Form is invalid');
    }
  }
}
