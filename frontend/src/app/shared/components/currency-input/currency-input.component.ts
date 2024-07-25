import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
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
  @Input() label: string | undefined;
  @Input() symbol: string | undefined;
  @Input() placeholder: string | undefined;
  @Input() amount: number | undefined;
  @Input() error: boolean | undefined;
  @Output() errorChange = new EventEmitter<boolean>();
  @Output() amountChange = new EventEmitter<number>();
  inputLeftPadding: string = '0px';

  // References the symbol div and the input element
  @ViewChild('symbolDiv') symbolDiv!: ElementRef;
  @ViewChild('input') input!: ElementRef;

  // Set inputLeftPadding every time the view is checked
  ngAfterViewChecked() {
    this.input.nativeElement.style.paddingLeft = this.symbolDiv.nativeElement.offsetWidth + 3 + 'px';
  }

  // Event handler for when the input amount changes
  onModelChange(event: number) {
    this.amountChange.emit(event);
    this.error = false;
    this.errorChange.emit(false);
  }
}
