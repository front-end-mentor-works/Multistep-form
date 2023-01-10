import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
  constructor() {}

  ngOnInit(): void {}
  goTo(index: number) {
    this.activeStep = index + 1;
    this.selectedStep.emit(this.activeStep);
  }
}
