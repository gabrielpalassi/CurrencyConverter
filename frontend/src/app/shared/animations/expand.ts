import { animate, style, transition, trigger } from '@angular/animations';

export const expand = trigger('expand', [
  transition(':enter', [
    style({ height: 0, overflow: 'hidden' }),
    animate('200ms ease', style({ height: '124px', overflow: 'hidden' })),
  ]),
]);
