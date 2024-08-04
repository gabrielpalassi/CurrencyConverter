import { animate, style, transition, trigger } from '@angular/animations';

export default trigger('fadeIn', [
  transition(':enter', [style({ opacity: 0 }), animate('500ms ease', style({ opacity: 1 }))]),
]);
