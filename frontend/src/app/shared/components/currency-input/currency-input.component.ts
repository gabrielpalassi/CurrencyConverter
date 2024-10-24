import { Component, ElementRef, input, model, output, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxCurrencyDirective } from 'ngx-currency';

@Component({
  selector: 'currency-input',
  standalone: true,
  imports: [FormsModule, NgxCurrencyDirective],
  templateUrl: './currency-input.component.html',
})
export class CurrencyInputComponent {
  // Inputs and outputs
  label = input<string>();
  symbol = input<string>();
  placeholder = input<string>();
  amount = model<number>();
  error = model<boolean>(false);
  enterPressed = output<void>();

  // Reference symbolDiv and input elements
  symbolDiv = viewChild.required<ElementRef>('symbolDiv');
  amountInput = viewChild.required<ElementRef>('amountInput');

  // Set inputLeftPadding every time the view is checked
  ngAfterViewChecked() {
    const offsetWidthInPx = this.symbolDiv().nativeElement.offsetWidth;
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const offsetWidthInRem = offsetWidthInPx / rootFontSize;
    const inputLeftPadding = this.symbolDiv().nativeElement.offsetWidth ? offsetWidthInRem + 0.1875 + 'rem' : '0.5rem';
    this.amountInput().nativeElement.style.paddingLeft = inputLeftPadding;
  }

  // Event handler for when the input amount changes
  onModelChange(event: number) {
    this.amount.set(event);
    this.error.set(false);
  }
}
