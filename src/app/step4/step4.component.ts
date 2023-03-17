import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBtnComponent } from '../navigation-btn/navigation-btn.component';

@Component({
  selector: 'app-step4',
  standalone: true,
  imports: [CommonModule, NavigationBtnComponent],
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss'],
})
export class Step4Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
