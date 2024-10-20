import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ButtonComponent } from './button/button.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { RegistrationComponent } from './registration/registration.component';
import { TableComponent } from './table/table.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';  

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'my-account', component: MyAccountComponent, canActivate: [AuthGuard] }, 
  { path: 'registration', component: RegistrationComponent },
  { path: 'breadcrumb', component: BreadcrumbComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'date-picker', component: DatePickerComponent },
  { path: 'join-us', component:JoinUsComponent },
  {path: 'home', component:HomeComponent},
  { path: 'table', component: TableComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },  
  { path: '**', component: LoginComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
