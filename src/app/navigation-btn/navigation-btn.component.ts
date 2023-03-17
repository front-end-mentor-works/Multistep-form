import { CommonModule } from '@angular/common';
import { Input, Component, Output, EventEmitter } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-navigation-btn',
  templateUrl: './navigation-btn.component.html',
  styleUrls: ['./navigation-btn.component.scss'],
})
export class NavigationBtnComponent {
  @Input() showGoBackBtn = true;
  @Input() btn2Text = 'Next Step';
  @Output() back = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();
}
