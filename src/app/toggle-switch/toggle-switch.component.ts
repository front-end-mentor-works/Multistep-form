import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-toggle-switch',
  imports: [CommonModule],
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss'],
})
export class ToggleSwitchComponent {
  @Input() isChecked = false;
  @Output() checked = new EventEmitter<boolean>();
  onCheckboxChange(event: any) {
    if (event.target.checked) {
      // Checkbox is checked
      this.checked.emit(true);
    } else {
      // Checkbox is unchecked
      this.checked.emit(false);
    }
  }
}
