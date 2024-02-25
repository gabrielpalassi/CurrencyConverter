import { Component } from '@angular/core';
import { InputComponent } from '../../shared/components/input/input.component';
import { SelectComponent } from '../../shared/components/select/select.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    InputComponent,
    SelectComponent
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  fromCurrencyPrefix: string = 'R$';
  value: string = '';
  console = console
}
