import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
   rows = [
    { name: 'John Doe', age: 28, role: 'Student' },
    { name: 'Jane Smith', age: 34, role: 'Trainer' },
    { name: 'Emily Johnson', age: 24, role: 'Student' },
    { name: 'Michael Brown', age: 40, role: 'Trainer' },
  ];

   columns = [
    { prop: 'name', name: 'Name' },
    { prop: 'age', name: 'Age' },
    { prop: 'role', name: 'Role' }
  ];
}
