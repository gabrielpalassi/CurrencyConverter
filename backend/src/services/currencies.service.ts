import Currency from '../../../shared/interfaces/currency.interface';

export const fetchCurrencies = async (): Promise<Currency[]> => {
  // Simulate fetching currencies
  return [
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
  ];
};
