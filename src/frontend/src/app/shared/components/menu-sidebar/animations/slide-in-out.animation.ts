import { trigger, transition, style, animate } from '@angular/animations';

export const slideInOut = trigger('slideInOut', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)' }),
    animate('250ms ease-out', style({ transform: 'translateX(0)' }))
  ]),
  transition(':leave', [
    animate('250ms ease-in', style({ transform: 'translateX(-100%)' }))
  ])
]);