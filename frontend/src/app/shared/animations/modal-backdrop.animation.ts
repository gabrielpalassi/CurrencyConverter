import { animate, style, transition, trigger } from '@angular/animations';

export default trigger('modalBackdrop', [
  transition(':enter', [style({ opacity: 0 }), animate('200ms ease-out', style({ opacity: 1 }))]),
  transition(':leave', [style({ opacity: 1 }), animate('200ms ease-in', style({ opacity: 0 }))]),
]);
