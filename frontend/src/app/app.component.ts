import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { ErrorModal } from './shared/components/error-modal/error-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, ErrorModal],
  templateUrl: './app.component.html',
})
export class AppComponent {}
