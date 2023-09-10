import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { plans } from '../plan';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  getPlans(): Observable<plans> {
    return new Observable<plans>((observer) => {
      setTimeout(() => {
        observer.next({
          monthly: [
            {
              name: 'Arcade',
              price: '$9/mo',
              text: '',
              icon: 'assets/images/icon-arcade.svg',
            },
            {
              name: 'Advanced',
              text: '',
              price: '$12/mo',
              icon: 'assets/images/icon-advanced.svg',
            },
            {
              name: 'Pro',
              text: '',
              price: '$15/mo',
              icon: 'assets/images/icon-pro.svg',
            },
          ],
          yearly: [
            {
              name: 'Arcade',
              text: '2 months free',
              price: '$90/yr',
              icon: 'assets/images/icon-arcade.svg',
            },
            {
              name: 'Advanced',
              text: '2 months free',
              price: '$120/yr',
              icon: 'assets/images/icon-advanced.svg',
            },
            {
              name: 'Pro',
              text: '2 months free',
              price: '$150/yr',
              icon: 'assets/images/icon-pro.svg',
            },
          ],
        });
      }, 100);
    });
  }
  getAddOns(): Observable<Addons> {
    return new Observable<Addons>((observer) => {
      setTimeout(() => {
        observer.next({
          monthly: [
            {
              name: 'Online service',
              price: '$1/mo',
              text: 'Access to multiplayer games',
            },
            {
              name: 'Larger storage',
              text: 'Extra 1TB of cloud save',
              price: '$2/mo',
            },
            {
              name: 'Customizable profile',
              text: 'Custom theme on your profile',
              price: '$2/mo',
            },
          ],
          yearly: [
            {
              name: 'Online service',
              price: '$10/yr',
              text: 'Access to multiplayer games',
            },
            {
              name: 'Larger storage',
              text: 'Extra 1TB of cloud save',
              price: '$20/yr',
            },
            {
              name: 'Customizable profile',
              text: 'Custom theme on your profile',
              price: '$20/yr',
            },
          ],
        });
      }, 100);
    });
  }
}

export interface Addon {
  name: string;
  price: string;
  text: string;
  active?: boolean;
}
export interface Addons {
  monthly: Addon[];
  yearly: Addon[];
}
