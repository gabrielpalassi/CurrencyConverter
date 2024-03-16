import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxCurrencyDirective } from "ngx-currency";

@Component({
  selector: 'app-currency-input',
  standalone: true,
  imports: [
    NgClass,
    FormsModule,
    NgxCurrencyDirective
  ],
  templateUrl: './currency-input.component.html'
})
export class CurrencyInputComponent {
  @Input() label: string | undefined;
  @Input() prefix: string | undefined;
  @Input() placeholder: string | undefined;
  @Input() value: number | undefined;
  @Input() error: string | undefined;
  @Output() valueChange = new EventEmitter<number>();
}
