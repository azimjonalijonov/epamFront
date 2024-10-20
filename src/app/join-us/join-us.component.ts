import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-join-us-box',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})
export class JoinUsComponent {
  @Input() title: string = 'Register as Trainer';
  @Input() description: string = 'Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.';
  @Input() buttonText: string = 'Join us';
}
