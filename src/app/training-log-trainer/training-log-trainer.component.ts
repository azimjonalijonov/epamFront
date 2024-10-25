import { Component } from '@angular/core';

@Component({
  selector: 'app-training-log-trainer',
  templateUrl: './training-log-trainer.component.html',
  styleUrls: ['./training-log-trainer.component.css']
})
export class TrainingLogTrainerComponent {
  searchTrainee: string = '';
  fromDate: string = '';
  toDate: string = '';

  trainings = [
    { date: '2023-01-10', name: 'Math Basics', trainee: 'John Doe', duration: '2 hours' },
    { date: '2023-01-12', name: 'Physics 101', trainee: 'Jane Doe', duration: '3 hours' },
  ];

  onSearch() {
    // Search functionality logic
    console.log('Searching trainings with filters:', this.searchTrainee, this.fromDate, this.toDate);
  }
}
