import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationStart, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() activeStep = 1;
  @Output() selectedStep = new EventEmitter<number>();

  steps = ['Your info', 'Select plan', 'Add-ons', 'Summary'];
  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        // Your code
        // Use (event.url) to get URL that is being navigated
        const { url } = event;
        if (url === '/step-1') {
          this.activeStep = 1;
        } else if (url === '/step-2') {
          this.activeStep = 2;
        } else if (url === '/step-3') {
          this.activeStep = 3;
        } else if (url === '/step-4') {
          this.activeStep = 4;
        }
      }
    });
  }

  ngOnInit(): void {}
  goTo(index: number) {
    this.activeStep = index + 1;
    this.selectedStep.emit(this.activeStep);
  }
}
