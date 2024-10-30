import { Component, inject, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { slideInOut } from '../../animations/slide-in-out';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  animations: [slideInOut],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  // Inject the Router
  private router = inject(Router);

  // Properties
  showMobileMenu = signal<boolean>(false);

  // Route and scroll to specified element
  routeToElement(event: Event, route: string, element: string | undefined = undefined): void {
    event.preventDefault(); // Prevent default anchor navigation
    if (this.showMobileMenu()) this.showMobileMenu.set(false);
    this.router.navigate([route]).then(() => {
      setTimeout(() => {
        if (element) document.getElementById(element)?.scrollIntoView({ block: 'center' });
        else window.scrollTo({ top: 0 });
      });
    });
  }
}
