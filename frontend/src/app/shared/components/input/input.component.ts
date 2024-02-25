import { Component, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    NgClass,
    FormsModule
  ],
  templateUrl: './input.component.html'
})
export class InputComponent {
  @Input() title: string = '';
  @Input() prefix: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = '';
  @Input() value: string | number = '';
}
