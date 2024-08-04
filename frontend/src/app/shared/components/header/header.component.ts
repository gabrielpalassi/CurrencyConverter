import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import slideInOut from '../../animations/slide-in-out';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  animations: [slideInOut],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  showMobileMenu: boolean = false;

  // Injects the Router service
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
