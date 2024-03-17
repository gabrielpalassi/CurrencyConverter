import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule
  ],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(10px)' }),
        animate('200ms ease', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('150ms ease', style({ opacity: 0, transform: 'translateX(10px)' }))
      ])
    ])
  ],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  showMobileMenu: boolean = false;

  constructor(private router: Router) {}

  // Route and scroll to specified element
  routeToElement(route: string, element: string | undefined = undefined): void {
    if (this.showMobileMenu) this.showMobileMenu = false;
    this.router.navigate([route]).then(() => {
      setTimeout(() => {
        if (element) document.getElementById(element)?.scrollIntoView({ block: 'center' });
        else window.scrollTo({ top: 0 });
      });
    });
  }
}
