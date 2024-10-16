import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  // Props (Inputs) for flexibility
  @Input() text: string = '';         // Button text
  @Input() icon: string = '';         // Icon class or image path
  @Input() type: string = 'standard'; // Button type (standard, hover, pressed, disabled)
  @Input() disabled: boolean = false; // Disable state of the button
  
  // Optional: Custom event handlers
  onButtonClick() {
    if (!this.disabled) {
      console.log('Button clicked!');
    }
  }
}
