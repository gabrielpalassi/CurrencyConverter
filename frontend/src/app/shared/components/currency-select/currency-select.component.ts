import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import Currency from '../../../../../../shared/interfaces/currency.interface';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import slideOutIn from '../../animations/slide-out-in.animation';
import fadeIn from '../../animations/fade-in.animation';

@Component({
  selector: 'app-currency-select',
  standalone: true,
  imports: [NgClass, FormsModule],
  animations: [slideOutIn, fadeIn],
  templateUrl: './currency-select.component.html',
})
export class CurrencySelectComponent {
  @Input() label: string | undefined;
  @Input() options: Currency[] | undefined;
  @Input() selectedOption: Currency | undefined;
  @Output() selectedOptionChange: EventEmitter<Currency> = new EventEmitter<Currency>();
  isDropdownOpen: boolean = false;
  filteredOptions: Currency[] = [];
  searchTerm: string = '';

  // References the search input element
  @ViewChild('searchInput') searchInput!: ElementRef;

  // Injects the element reference
  constructor(private elementRef: ElementRef) {}

  // Sets the initial filtered options
  ngOnInit(): void {
    if (this.options) this.filteredOptions = this.options;
  }

  // Updates the filtered options when the options input changes
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['options'] && changes['options'].currentValue) {
      this.filteredOptions = changes['options'].currentValue;
    }
  }

  // Selects an option, closes the menu and emits the selectedOptionChange event
  selectOption(option: Currency): void {
    this.selectedOption = option;
    this.isDropdownOpen = false;
    this.selectedOptionChange.emit(option);
  }

  // Filters the options based on the search term
  filterOptions(): void {
    if (!this.options) {
      this.filteredOptions = [];
      return;
    }

    if (!this.searchTerm) {
      this.filteredOptions = this.options;
      return;
    }

    this.filteredOptions = this.options.filter((option) =>
      (option.code + ' - ' + option.name).toLowerCase().includes(this.searchTerm.toLowerCase()),
    );
  }

  // Listens for clicks and closes the dropdown menu when clicking outside of the component
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.isDropdownOpen = false;
    }
  }

  // Listen for keypress events and focus the search input if the dropdown is open
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(): void {
    if (this.isDropdownOpen) {
      this.searchInput.nativeElement.focus();
    }
  }
}
