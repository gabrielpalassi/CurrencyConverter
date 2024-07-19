import { animate, style, transition, trigger } from '@angular/animations';

export default trigger('slideInOut', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(10px)' }),
    animate('200ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
  transition(':leave', [animate('150ms ease', style({ opacity: 0, transform: 'translateX(10px)' }))]),
]);
