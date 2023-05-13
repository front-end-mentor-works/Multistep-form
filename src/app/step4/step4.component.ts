import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../app-store/app.reducer';
import { NavigationBtnComponent } from '../navigation-btn/navigation-btn.component';
import { Plan } from '../plan';
import { Addon } from '../step2/plan.service';
import { PlanState } from '../step2/store/step2.reducer';
import { addonState } from '../step3/store/step3.reducer';

@Component({
  selector: 'app-step4',
  standalone: true,
  imports: [CommonModule, NavigationBtnComponent,RouterModule],
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss'],
})
export class Step4Component implements OnInit {
  constructor(private store: Store<AppState>, private router: Router) {}

  confirm() {
    this.router.navigateByUrl('/step-5');
  }
  backToAddon() {
    this.router.navigateByUrl('/step-3');
  }

  step2Sub$: Subscription;
  addonSub$: Subscription;
  selectedAddons: Addon[] = [];
  selectedPlan: Plan | null;
  planType: 'monthly' | 'yearly';
  total = 0;
  ngOnDestroy(): void {
    if (this.step2Sub$) this.step2Sub$.unsubscribe();
    if (this.addonSub$) this.addonSub$.unsubscribe();
  }
  ngOnInit(): void {
    this.step2Sub$ = this.store.select('step2').subscribe((data: PlanState) => {
      this.selectedPlan = data.selectedPlan;
      console.log('plan selected', this.selectedPlan);
      this.planType = data.planType;
      const price = this.selectedPlan?.price ?? '';
      const splittedPrice = price?.split('/')[0]?.split('$');
      if (splittedPrice) {
        this.total += +splittedPrice[1];
      }
    });
    this.addonSub$ = this.store
      .select('step3')
      .subscribe((data: addonState) => {
        this.selectedAddons = data.selectedAddons;
        console.log('data addon', data);
        this.selectedAddons.forEach((addon) => {
          const price = addon?.price ?? '';
          this.total += +price?.split('/')[0].split('$')[1];
        });
      });
  }
}
