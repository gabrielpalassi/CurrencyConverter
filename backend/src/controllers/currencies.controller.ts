import Currency from '../../../shared/interfaces/currency.interface';
import { getAllCurrenciesData } from '../services/currency.service';

// Returns all currencies
export const getCurrencies = async (): Promise<Currency[]> => {
  try {
    const currenciesData = await getAllCurrenciesData();
    return currenciesData.map(({ currency }) => currency);
  } catch (error: any) {
    const errorMessage = error.message ? `Failed to fetch currencies: ${error.message}` : 'Failed to fetch currencies.';
    throw new Error(errorMessage);
  }
};
