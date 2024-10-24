import { Component, computed, ElementRef, HostListener, inject, input, model, signal, viewChild } from '@angular/core';
import Currency from '../../../../../../shared/interfaces/currency';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import slideOutIn from '../../animations/slide-out-in';
import fadeIn from '../../animations/fade-in';

@Component({
  selector: 'currency-select',
  standalone: true,
  imports: [NgClass, FormsModule],
  animations: [slideOutIn, fadeIn],
  templateUrl: './currency-select.component.html',
})
export class CurrencySelectComponent {
  // Inputs and outputs
  label = input<string>();
  options = input<Currency[]>();
  selectedOption = model<Currency>();

  // Properties
  isDropdownOpen = signal<boolean>(false);
  searchTerm = signal<string>('');
  filteredOptions = computed<Currency[]>(() => {
    if (!this.searchTerm()) return this.options() ?? [];
    return this.options()!.filter((option) =>
      (option.code + ' - ' + option.name).toLowerCase().includes(this.searchTerm().toLowerCase()),
    );
  });

  // Inject ElementRef and reference the search input element
  private elementRef = inject(ElementRef);
  private searchInput = viewChild.required<ElementRef>('searchInput');

  // Toggles the dropdown menu
  toggleDropdown(): void {
    this.isDropdownOpen.update((value) => !value);
  }

  // Selects an option and closes the menu
  selectOption(option: Currency): void {
    this.selectedOption.set(option);
    this.isDropdownOpen.set(false);
  }

  // Listens for clicks and closes the dropdown menu when clicking outside of the component
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) this.isDropdownOpen.set(false);
  }

  // Listen for keypress events and focus the search input if the dropdown is open
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(): void {
    if (this.isDropdownOpen()) this.searchInput().nativeElement.focus();
  }
}
