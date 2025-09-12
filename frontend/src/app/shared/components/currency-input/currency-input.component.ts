import { Component, input, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxCurrencyDirective } from 'ngx-currency';

@Component({
  selector: 'currency-input',
  standalone: true,
  imports: [FormsModule, NgxCurrencyDirective],
  templateUrl: 'currency-input.component.html',
})
export class CurrencyInputComponent {
  // Inputs and outputs
  label = input<string>();
  symbol = input<string>();
  placeholder = input<string>();
  amount = model<number>();
  error = model<boolean>(false);
  enterPressed = output<void>();
}
