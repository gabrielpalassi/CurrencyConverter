import { Component, ElementRef, HostListener, viewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
})
export class AboutComponent {
  whiteFullWidthContainer = viewChild.required<ElementRef>('whiteFullWidthContainer');

  // Adjusts the fullwidth white container height after the view has been initialized
  ngAfterViewChecked() {
    this.setContainerHeight();
  }

  // Adjusts the fullwidth white container height on window resize
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setContainerHeight();
  }

  // Check if body height is less than viewport height and adjust the fullwidth white container height to fill the screen
  private setContainerHeight() {
    this.whiteFullWidthContainer().nativeElement.style.height = 'auto';
    const bodyHeight = document.body.clientHeight;
    const viewportHeight = window.innerHeight;
    if (bodyHeight < viewportHeight) {
      const offsetTop = this.whiteFullWidthContainer().nativeElement.offsetTop;
      const height = viewportHeight - offsetTop;
      this.whiteFullWidthContainer().nativeElement.style.height = `${height}px`;
    } else {
      this.whiteFullWidthContainer().nativeElement.style.height = 'auto';
    }
  }
}
