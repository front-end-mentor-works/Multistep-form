import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '../app-store/app.reducer';
import * as step1Actions from './store/step1.actions';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavigationBtnComponent } from '../navigation-btn/navigation-btn.component';
@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [CommonModule, FormsModule, NavigationBtnComponent],
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component implements OnInit, OnDestroy {
  @ViewChild('f', { static: false })
  slForm!: NgForm;

  step1Sub$: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
    private _router: Router
  ) {}
  ngOnDestroy(): void {
    if (this.step1Sub$) this.step1Sub$.unsubscribe();
  }
  ngOnInit(): void {
    this.step1Sub$ = this.store.select('step1').subscribe((data) => {
      const { name, email, phone } = data;
      this.user = {
        name,
        email,
        phone,
      };
      console.log('DATA IS', data);

      if (data.error) this.isValidForm();
    });
  }
  user = {
    name: '',
    phone: '',
    email: '',
  };

  invalidName = '';
  invalidPhone = '';
  invalidEmail = '';
  isValidForm(): boolean {
    const { name, email, phone } = this.user;
    const requiredText = 'This field is required';
    if (!name) {
      this.invalidName = requiredText;
    }
    if (!phone) {
      this.invalidPhone = requiredText;
    }
    if (!email) {
      this.invalidEmail = requiredText;
    }
    if (email && !email.includes('@')) {
      this.invalidEmail = 'Invalid email';
    }
    const invalidForm =
      this.invalidEmail || this.invalidName || this.invalidPhone;
    if (invalidForm) {
      return false;
    } else {
      this.invalidName = '';
      this.invalidPhone = '';
      this.invalidEmail = '';
      return true;
    }
  }
  submitForm() {
    const isValidForm = this.isValidForm();

    const data = { ...this.user, error: !isValidForm };
    console.log('form validity  ', isValidForm, '   ', data);
    this.store.dispatch(step1Actions.step1Submit(data));
    // this.slForm.reset();
    if (isValidForm) {
      this._router.navigateByUrl(`/step-2`);
    }
  }
}
