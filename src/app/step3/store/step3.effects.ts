import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Addons, PlanService } from 'src/app/step2/plan.service';
import {
    loadAddonSuccess,
    loadAddons,
    loadAddonsFailure
} from './step3.actions';

@Injectable()
export class addonEffects {
  constructor(private actions$: Actions, private planService: PlanService) {}


  loadAddOns$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(loadAddons),
      switchMap(() => {
        return this.planService.getAddOns().pipe(
          map((addons: Addons) => {
            return loadAddonSuccess({ addOns: addons });
          }),
          catchError((error) => {
            return of(loadAddonsFailure({ error }));
          })
        );
      })
    )
  );
}
