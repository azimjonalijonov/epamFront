import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mini-profile',
  templateUrl: './mini-profile.component.html',
  styleUrls: ['./mini-profile.component.css']
})
export class MiniProfileComponent {
  menuOpen = false;  
  nightMode = false; 
  userName = "Marta_st";  
  userEmail = "marta_12334@gmail.com";

  constructor(private router: Router) {}

  toggleProfileMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleNightMode() {
    if (this.nightMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  signOut() {
    console.log('User signed out');
    this.router.navigate(['/home']);
  }
}
