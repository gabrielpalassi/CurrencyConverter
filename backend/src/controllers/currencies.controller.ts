import Currency from '../../../shared/interfaces/currency.interface';
import { getAllCurrenciesData } from '../services/currency.service';

// Returns all currencies
export const getCurrencies = async (): Promise<Currency[]> => {
  try {
    const currenciesData = await getAllCurrenciesData();
    return currenciesData.map(({ currency }) => currency);
  } catch (error) {
    let errorMessage = 'Failed to fetch currencies.';
    if (error instanceof Error && error.message) errorMessage = `Failed to fetch currencies: ${error.message}`;
    throw new Error(errorMessage);
  }
};
