import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ang-multi-step';
  currentStep = 1;
  goToStep(e: number) {
    console.log('GO TO STEP', e);
  }
}
