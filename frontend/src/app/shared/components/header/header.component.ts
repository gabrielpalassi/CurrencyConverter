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
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  // Component's variables
  showMobileMenu: boolean = false;
  animateCloseMobileMenu: boolean = false;
  
  // Sets showMobileMenu state after a delay to allow for the animation to play
  setShowMobileMenuState(state: boolean): void {
    if (state === false) {
      this.animateCloseMobileMenu = true;
      setTimeout(() => {
        this.showMobileMenu = state;
        this.animateCloseMobileMenu = false;
      }, 70);
    } else {
      this.showMobileMenu = state;
    }
  }
}
