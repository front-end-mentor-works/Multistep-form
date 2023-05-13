import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { plans } from '../../plan';
import { PlanService } from '../plan.service';
import {
  loadPlans,
  loadPlansFailure,
  loadPlansSuccess
} from './step2.actions';

@Injectable()
export class PlanEffects {
  constructor(private actions$: Actions, private planService: PlanService) {}

  loadPlans$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPlans),
      switchMap(() => {
        return this.planService.getPlans().pipe(
          map((plans: plans) => {
            return loadPlansSuccess({ plans });
          }),
          catchError((error) => {
            return of(loadPlansFailure({ error }));
          })
        );
      })
    )
  );

}
