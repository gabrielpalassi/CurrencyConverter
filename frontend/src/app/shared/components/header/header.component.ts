import { animate, style, transition, trigger } from '@angular/animations';
import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    NgClass
  ],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(10px)' }),
        animate('200ms ease', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('100ms ease', style({ opacity: 0, transform: 'translateX(10px)' }))
      ])
    ])
  ],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  showMobileMenu: boolean = false;
}
