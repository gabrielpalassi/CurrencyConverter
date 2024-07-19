import { animate, style, transition, trigger } from '@angular/animations';

export default trigger('expand', [
  transition(':enter', [
    style({ height: 0, overflow: 'hidden' }),
    animate('500ms ease', style({ height: '124px', overflow: 'hidden' })),
  ]),
]);
