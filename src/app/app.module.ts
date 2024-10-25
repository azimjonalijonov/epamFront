import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyAccountComponent } from './my-account/my-account.component';
import { TableComponent } from './table/table.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalBoxComponent } from './modal-box/modal-box.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { MiniProfileComponent } from './mini-profile/mini-profile.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RegistrationVerificationComponent } from './registration-verification/registration-verification.component';
import { TrainingLogStudentComponent } from './training-log-student/training-log-student.component';
import { TrainingLogTrainerComponent } from './training-log-trainer/training-log-trainer.component';
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
    MyAccountComponent,
    TableComponent,
    NavigationComponent,
    BreadcrumbComponent,
    ModalBoxComponent,
    DatePickerComponent,
    MiniProfileComponent,
    HomeComponent,
    JoinUsComponent,
    ChangePasswordComponent,
    RegistrationVerificationComponent,
    TrainingLogStudentComponent,
    TrainingLogTrainerComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    MatDialogModule,
    MatSlideToggleModule,

MatDatepickerModule,
MatInputModule,
MatNativeDateModule ,
    FormsModule,
    BrowserAnimationsModule ,
    ToastrModule.forRoot({  
      timeOut: 3000,        
      positionClass: 'toast-top-right', 
      preventDuplicates: true,  
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
