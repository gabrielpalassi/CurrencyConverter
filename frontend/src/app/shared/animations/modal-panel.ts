import { animate, style, transition, trigger } from '@angular/animations';

export default trigger('modalPanel', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.95)' }),
    animate('200ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
  ]),
  transition(':leave', [
    style({ opacity: 1, transform: 'scale(1)' }),
    animate('200ms ease-in', style({ opacity: 0, transform: 'scale(0.95)' })),
  ]),
]);
