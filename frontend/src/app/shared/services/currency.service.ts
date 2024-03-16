import { Injectable } from '@angular/core';
import { Currency } from '../interfaces/currency.interface';
import { data } from '../../pages/home/data.mock';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  // Simulates a request to an API to get the currency list
  getCurrencyList(): Promise<Currency[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { shortName: 'USD', fullName: 'US Dollar', flag: 'https://cdn-icons-png.flaticon.com/512/551/551953.png', prefix: '$' },
          { shortName: 'EUR', fullName: 'Euro', flag: 'https://cdn-icons-png.flaticon.com/512/552/552084.png', prefix: '€' },
          { shortName: 'BRL', fullName: 'Brazilian Real', flag: 'https://cdn-icons-png.flaticon.com/512/551/551856.png', prefix: 'R$' },
          { shortName: 'GBP', fullName: 'British Pound', flag: 'https://cdn-icons-png.flaticon.com/512/551/551844.png', prefix: '£' },
          { shortName: 'JPY', fullName: 'Japanese Yen', flag: 'https://cdn-icons-png.flaticon.com/512/552/552073.png', prefix: '¥' }
        ]);
      }, 500);
    });
  }

  // Simulates a request to an API to get the conversion table
  getConversionTable(from: Currency): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { currency: { shortName: 'USD', fullName: 'US Dollar', flag: 'https://cdn-icons-png.flaticon.com/512/551/551953.png', prefix: '$' }, rate: 1 },
          { currency: { shortName: 'EUR', fullName: 'Euro', flag: 'https://cdn-icons-png.flaticon.com/512/552/552084.png', prefix: '€' }, rate: 0.85 },
          { currency: { shortName: 'BRL', fullName: 'Brazilian Real', flag: 'https://cdn-icons-png.flaticon.com/512/551/551856.png', prefix: 'R$' }, rate: 5.5 },
          { currency: { shortName: 'GBP', fullName: 'British Pound', flag: 'https://cdn-icons-png.flaticon.com/512/551/551844.png', prefix: '£' }, rate: 0.72 },
          { currency: { shortName: 'JPY', fullName: 'Japanese Yen', flag: 'https://cdn-icons-png.flaticon.com/512/552/552073.png', prefix: '¥' }, rate: 110 }
        ]);
      }, 500);
    });
  }

  // Simulates a request to an API to convert a currency
  convert(from: Currency, to: Currency, value: number): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          from: {
            currency: from,
            value
          },
          to: {
            currency: to,
            value: value * 5
          },
          rate: 5,
          chartData: data
        });
      }, 500);
    });
  }
}
