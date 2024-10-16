import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent {

  constructor(private toastr: ToastrService) {}

  showSuccess() {
    this.toastr.success('Data saved successfully!', 'Success');
  }

  showError() {
    this.toastr.error('Something went wrong!', 'Error');
  }

  showInfo() {
    this.toastr.info('Here is some information for you.', 'Information');
  }

  showWarning() {
    this.toastr.warning('This is a warning message.', 'Warning');
  }
}

