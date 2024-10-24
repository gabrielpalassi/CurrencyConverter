import { Component, ElementRef, EventEmitter, Input, Output, viewChild } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxCurrencyDirective } from 'ngx-currency';

@Component({
  selector: 'currency-input',
  standalone: true,
  imports: [NgClass, FormsModule, NgxCurrencyDirective],
  templateUrl: './currency-input.component.html',
})
export class CurrencyInputComponent {
  // Inputs and outputs
  @Input() label: string | undefined;
  @Input() symbol: string | undefined;
  @Input() placeholder: string | undefined;
  @Input() amount: number | undefined;
  @Output() amountChange = new EventEmitter<number>();
  @Input() error: boolean | undefined;
  @Output() errorChange = new EventEmitter<boolean>();
  @Output() enterPressed = new EventEmitter<void>();

  // Reference symbolDiv and input elements
  symbolDiv = viewChild.required<ElementRef>('symbolDiv');
  input = viewChild.required<ElementRef>('input');

  // Set inputLeftPadding every time the view is checked
  ngAfterViewChecked() {
    const offsetWidthInPx = this.symbolDiv().nativeElement.offsetWidth;
    const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const offsetWidthInRem = offsetWidthInPx / rootFontSize;
    const inputLeftPadding = this.symbolDiv().nativeElement.offsetWidth ? offsetWidthInRem + 0.1875 + 'rem' : '0.5rem';
    this.input().nativeElement.style.paddingLeft = inputLeftPadding;
  }

  // Event handler for when the input amount changes
  onModelChange(event: number) {
    this.amountChange.emit(event);
    this.error = false;
    this.errorChange.emit(false);
  }
}
