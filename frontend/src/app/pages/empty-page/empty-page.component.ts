import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-empty-page',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './empty-page.component.html'
})
export class EmptyPageComponent {

}
