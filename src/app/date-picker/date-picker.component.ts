import { Component } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {
  selectedDate: Date | null = null;

  // Function to handle date changes
  onDateChange(event: any) {
    this.selectedDate = event.value;
    console.log('Selected date:', this.selectedDate);
  }
}
