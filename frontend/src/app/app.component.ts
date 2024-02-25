import { Component } from '@angular/core';
import { EmptyPageComponent } from './pages/empty-page/empty-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    EmptyPageComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {

}
