import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBtnComponent } from '../navigation-btn/navigation-btn.component';

@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [CommonModule, NavigationBtnComponent],
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss'],
})
export class Step3Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
