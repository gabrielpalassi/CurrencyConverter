import { ConversionTableResponse } from '@shared/types';
import { Currency } from '@shared/types';
import { getAllCurrenciesData } from '../services/currency';
import { convertCurrency } from './convert';

// Returns the conversion table for the given base currency
export const getConversionTable = async (base: Currency): Promise<ConversionTableResponse> => {
  try {
    if (!base) throw new Error('Invalid base currency');

    const allCurrencies = (await getAllCurrenciesData()).map(({ currency }) => currency);

    const targetCurrencyCodes = ['USD', 'EUR', 'GBP', 'JPY', 'AUD'].filter(
      (currencyCode) => currencyCode !== base.code,
    );

    const result = (
      await Promise.all(
        targetCurrencyCodes.map(async (targetCurrencyCode) => {
          const target = allCurrencies.find(({ code }) => code === targetCurrencyCode);
          if (!target) throw new Error(`Currency ${targetCurrencyCode} not found`);
          return await convertCurrency(base, target, 1);
        }),
      )
    ).map(({ result }) => result);

    return {
      base,
      result,
    };
  } catch (error) {
    let errorMessage = 'Failed to get conversion table.';
    if (error instanceof Error && error.message) errorMessage = `Failed to get conversion table: ${error.message}`;
    throw new Error(errorMessage);
  }
};
