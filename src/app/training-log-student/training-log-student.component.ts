import { Component } from '@angular/core';

@Component({
  selector: 'app-training-log-student',
  templateUrl: './training-log-student.component.html',
  styleUrls: ['./training-log-student.component.css']
})
export class TrainingLogStudentComponent {
  searchTrainer: string = '';
  searchSpecialization: string = '';
  fromDate: string = '';
  toDate: string = '';

  specializations = ['Math', 'Science', 'History'];

  trainings = [
    { date: '2023-01-10', name: 'Math Basics', type: 'Math', duration: '2 hours' },
    { date: '2023-01-12', name: 'Physics 101', type: 'Physics', duration: '3 hours' },
  ];

  onSearch() {
    // Filtering logic based on form inputs can go here
    console.log('Searching trainings with filters:', this.searchTrainer, this.searchSpecialization, this.fromDate, this.toDate);
  }
}
