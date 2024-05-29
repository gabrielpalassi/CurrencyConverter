import { Injectable } from '@angular/core';
import { Currency } from '../interfaces/currency.interface';
import { data } from '../../pages/home/data.mock';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  // Simulates a request to an API to get the currency list
  getCurrencyList(): Promise<Currency[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            shortName: 'USD',
            fullName: 'US Dollar',
            flag: 'https://cdn-icons-png.flaticon.com/512/551/551953.png',
            prefix: '$',
          },
          {
            shortName: 'EUR',
            fullName: 'Euro',
            flag: 'https://cdn-icons-png.flaticon.com/512/552/552084.png',
            prefix: '€',
          },
          {
            shortName: 'BRL',
            fullName: 'Brazilian Real',
            flag: 'https://cdn-icons-png.flaticon.com/512/551/551856.png',
            prefix: 'R$',
          },
          {
            shortName: 'GBP',
            fullName: 'British Pound',
            flag: 'https://cdn-icons-png.flaticon.com/512/551/551844.png',
            prefix: '£',
          },
          {
            shortName: 'JPY',
            fullName: 'Japanese Yen',
            flag: 'https://cdn-icons-png.flaticon.com/512/552/552073.png',
            prefix: '¥',
          },
        ]);
      }, 500);
    });
  }

  // Simulates a request to an API to get the conversion table
  getConversionTable(from: Currency): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          from: {
            currency: {
              shortName: 'USD',
              fullName: 'US Dollar',
              flag: 'https://cdn-icons-png.flaticon.com/512/551/551953.png',
              prefix: '$',
            },
            value: 1,
          },
          to: [
            {
              currency: {
                shortName: 'USD',
                fullName: 'US Dollar',
                flag: 'https://cdn-icons-png.flaticon.com/512/551/551953.png',
                prefix: '$',
              },
              value: 1,
              chartData: data,
            },
            {
              currency: {
                shortName: 'EUR',
                fullName: 'Euro',
                flag: 'https://cdn-icons-png.flaticon.com/512/552/552084.png',
                prefix: '€',
              },
              value: 0.85,
              chartData: data,
            },
            {
              currency: {
                shortName: 'BRL',
                fullName: 'Brazilian Real',
                flag: 'https://cdn-icons-png.flaticon.com/512/551/551856.png',
                prefix: 'R$',
              },
              value: 5.5,
              chartData: data,
            },
            {
              currency: {
                shortName: 'GBP',
                fullName: 'British Pound',
                flag: 'https://cdn-icons-png.flaticon.com/512/551/551844.png',
                prefix: '£',
              },
              value: 0.72,
              chartData: data,
            },
            {
              currency: {
                shortName: 'JPY',
                fullName: 'Japanese Yen',
                flag: 'https://cdn-icons-png.flaticon.com/512/552/552073.png',
                prefix: '¥',
              },
              value: 110,
              chartData: data,
            },
          ],
        });
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
            value,
          },
          to: {
            currency: to,
            value: value * 0.85,
            chartData: data,
          },
        });
      }, 500);
    });
  }
}
