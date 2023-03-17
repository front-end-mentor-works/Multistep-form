import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBtnComponent } from '../navigation-btn/navigation-btn.component';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [CommonModule, NavigationBtnComponent],
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
})
export class Step2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
