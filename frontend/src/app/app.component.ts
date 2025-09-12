import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@/app/shared/components/header/header.component';
import { ErrorModal } from '@/app/shared/components/error-modal/error-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, ErrorModal],
  templateUrl: './app.component.html',
})
export class AppComponent {}
