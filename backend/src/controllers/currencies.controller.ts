import Currency from '../../../shared/interfaces/currency.interface';
import { fetchCurrencies } from '../services/currencies.service';

export const getCurrencies = async (): Promise<Currency[]> => {
  const currencies: Currency[] = await fetchCurrencies();
  return currencies;
};
