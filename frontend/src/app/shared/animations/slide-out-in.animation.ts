import { animate, style, transition, trigger } from '@angular/animations';

export const slideOutIn = trigger('slideOutIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-10px)' }),
    animate('200ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
  transition(':leave', [animate('100ms ease', style({ opacity: 0, transform: 'translateY(-10px)' }))]),
]);
