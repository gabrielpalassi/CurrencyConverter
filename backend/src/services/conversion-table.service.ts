import Currency from '../../../shared/interfaces/currency.interface';
import ConversionTableResponse from '../../../shared/interfaces/conversion-table-response.interface';
import { data } from './data.mock';

export const fetchConversionTable = async (base: Currency): Promise<ConversionTableResponse> => {
  // Simulate fetching conversion table for a base currency
  return {
    base,
    result: [
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
    ].filter(({ currency }) => currency.shortName !== base.shortName),
  };
};
