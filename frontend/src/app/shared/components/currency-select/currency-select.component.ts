import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { Currency } from '../../interfaces/currency.interface';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-currency-select',
  standalone: true,
  imports: [
    NgClass,
    FormsModule
  ],
  templateUrl: './currency-select.component.html'
})
export class CurrencySelectComponent {
  @Input() label: string = '';
  @Input() options: Currency[] = [];
  @Input() selectedOption: Currency = this.options[0];
  @Output() selectedOptionChange = new EventEmitter<Currency>();

  isDropdownOpen: boolean = false;
  filteredOptions: Currency[] = [];
  searchTerm: string = '';
  animateCloseDropdown: boolean = false;

  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.filteredOptions = this.options;
  }

  // Sets isDropdownOpen state after a delay to allow for the animation to play
  setDropdownOpenState(state: boolean): void {
    if (state === false) {
      this.animateCloseDropdown = true;
      setTimeout(() => {
        // Sets the state and reset the animation state and search filter
        this.isDropdownOpen = false;
        this.animateCloseDropdown = false;
        this.searchTerm = '';
        this.filterOptions();
      }, 100);
    } else {
      this.isDropdownOpen = state;
    }
  }

  // Selects an option, closes the menu and emits the selectedOptionChange event
  selectOption(option: Currency): void {
    this.selectedOption = option;
    this.setDropdownOpenState(false);
    this.selectedOptionChange.emit(option);
  }

  // Filters the options based on the search term
  filterOptions(): void {
    if (!this.searchTerm) {
      this.filteredOptions = this.options;
      return;
    }

    this.filteredOptions = this.options.filter(option =>
      option.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Listens and loses the dropdown when clicking outside of the component
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.setDropdownOpenState(false);
    }
  }

  // Listen for keypress events and focus the search input if the dropdown is open
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent() {
    if (this.isDropdownOpen) {
      this.searchInput.nativeElement.focus();
    }
  }
}
