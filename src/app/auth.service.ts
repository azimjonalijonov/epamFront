// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogin:boolean=false;
  isAuthenticated(): boolean {
     return this.isLogin;
  }
  private users: { [username: string]: string } = {};  
  constructor() { }

   registerUser(username: string, password: string): void {
    this.users[username] = password;
  }

   login(username: string, password: string): boolean {
    if( this.users[username] === password){
      this.isLogin=true;
      return true;
    }
    return false;
  }

   isUserRegistered(username: string): boolean {
    return !!this.users[username];
  }
}
