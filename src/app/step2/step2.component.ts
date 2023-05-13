import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../app-store/app.reducer';
import { NavigationBtnComponent } from '../navigation-btn/navigation-btn.component';
import { Plan, plans } from '../plan';
import { ToggleSwitchComponent } from '../toggle-switch/toggle-switch.component';
import { loadPlans, selectPlan } from './store/step2.actions';
import { addonState } from '../step3/store/step3.reducer';
import { Addon, Addons } from './plan.service';
import { Addonlist } from '../step3/step3.component';
import { selectAddon } from '../step3/store/step3.actions';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [CommonModule, NavigationBtnComponent, ToggleSwitchComponent],
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
})
export class Step2Component implements OnInit {
  constructor(private store: Store<AppState>, private router: Router) {}

  plans: plans;
  currentPlanType: 'monthly' | 'yearly' = 'monthly';
  selectedPlan: Plan | null;

  changePlanType(e: boolean) {
    this.currentPlanType = e ? 'yearly' : 'monthly';
    if (this.plans) {
      const plans = { ...this.plans };

      const newPlans = plans[this.currentPlanType];
      const selectedPlanIndex = newPlans.findIndex(({ name }) => {
        console.log(
          'name ',
          name,
          '  ',
          this.selectedPlan?.name,
          name === this.selectedPlan?.name
        );

        return name === this.selectedPlan?.name;
      });
      console.log('plans ', plans, newPlans, selectedPlanIndex);
      if (selectedPlanIndex !== -1) {
        this.selectedPlan = newPlans[selectedPlanIndex];
      }
    }
    // this.store.dispatch(changePlanType({planType: this.currentPlanType}))
    this.store.dispatch(
      selectPlan({
        selectedPlan: this.selectedPlan,
        planType: this.currentPlanType,
      })
    );
    if (this.selectedAddons?.length) {
      let newAddons: Addon[] = [];
      this.selectedAddons.forEach(({ name }) => {
        const foundIndex = this.addons[this.currentPlanType].findIndex(
          (addon) => addon.name === name
        );
        if (foundIndex != -1) {
          newAddons.push(this.addons[this.currentPlanType][foundIndex]);
        }
      });
      this.store.dispatch(selectAddon({ selectedAddons: newAddons }));
    }
  }
  selectPlan(plan: Plan) {
    this.store.dispatch(
      selectPlan({ selectedPlan: plan, planType: this.currentPlanType })
    );
  }
  goToStep3() {
    this.router.navigate(['/step-3']);
  }
  goToStep1() {
    this.router.navigate(['/step-1']);
  }
  step2Sub$: Subscription;
  addonSub$: Subscription;

  ngOnDestroy(): void {
    if (this.step2Sub$) this.step2Sub$.unsubscribe();
    if (this.addonSub$) this.addonSub$.unsubscribe();
  }
  selectedAddons: Addon[];
  addons: Addons;
  ngOnInit(): void {
    this.store.dispatch(loadPlans());
    this.step2Sub$ = this.store
      .select('step2')
      .subscribe((data: AppState['step2']) => {
        console.log('DATA IS', data);
        this.plans = {
          ...data.plans,
        };
        this.currentPlanType = data.planType;
        this.selectedPlan = data.selectedPlan;
      });
    this.addonSub$ = this.store
      .select('step3')
      .subscribe((data: addonState) => {
        this.selectedAddons = data.selectedAddons;
        this.addons = data.addons;
        console.log('is addons', this.selectedAddons?.length);
      });
  }
}
