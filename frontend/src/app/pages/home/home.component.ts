import { Component } from '@angular/core';
import { CurrencyInputComponent } from '../../shared/components/currency-input/currency-input.component';
import { CurrencySelectComponent } from '../../shared/components/currency-select/currency-select.component';
import { Currency } from '../../shared/interfaces/Currency.interface';

interface ConversionData {
  options: Currency[];
  from: Currency;
  to: Currency;
  value: number | undefined;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CurrencyInputComponent,
    CurrencySelectComponent
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  // Component's variables
  conversionData: ConversionData = {} as ConversionData;

  // Lifecycle hook - runs when the component is initialized
  ngOnInit(): void {
    this.fetchCurrenciesList();
  }

  // Switches the currencies
  switchConversionCurrencies(): void {
    const temp = this.conversionData.from;
    this.conversionData.from = this.conversionData.to;
    this.conversionData.to = temp;
  }

  // Fetches the currencies list and sets conversionData
  fetchCurrenciesList(): void {
    this.conversionData = {
      options: [
        { name: 'USD - US Dollar', flag: 'https://cdn-icons-png.flaticon.com/512/551/551953.png', prefix: '$'},
        { name: 'BRL - Brazilian Real', flag: 'https://cdn-icons-png.flaticon.com/512/551/551856.png', prefix: 'R$'},
        { name: 'EUR - Euro', flag: 'https://cdn-icons-png.flaticon.com/512/552/552084.png', prefix: '€'},
        { name: 'GBP - British Pound', flag: 'https://cdn-icons-png.flaticon.com/512/551/551844.png', prefix: '£'},
        { name: 'JPY - Japanese Yen', flag: 'https://cdn-icons-png.flaticon.com/512/552/552073.png', prefix: '¥'},
        { name: 'CNY - Chinese Yuan', flag: 'https://cdn-icons-png.flaticon.com/512/551/551856.png', prefix: '¥'},
        { name: 'CAD - Canadian Dollar', flag: 'https://cdn-icons-png.flaticon.com/512/551/551953.png', prefix: '$'},
        { name: 'AUD - Australian Dollar', flag: 'https://cdn-icons-png.flaticon.com/512/551/551856.png', prefix: '$'},
        { name: 'CHF - Swiss Franc', flag: 'https://cdn-icons-png.flaticon.com/512/552/552084.png', prefix: 'Fr'},
      ],
      from: {} as Currency,
      to: {} as Currency,
      value: undefined
    };
    this.conversionData.from = this.conversionData.options[0];
    this.conversionData.to = this.conversionData.options[1];
  }

  // Handles the conversion
  convertCurrency(): void {
    console.log('Converting currency...');
  }
}
