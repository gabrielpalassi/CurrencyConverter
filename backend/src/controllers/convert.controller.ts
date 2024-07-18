import ConversionResponse from '../../../shared/interfaces/conversion-response.interface';
import Currency from '../../../shared/interfaces/currency.interface';
import { convertCurrencyAmount } from '../services/convert.service';

export const convertCurrency = async (
  base: Currency,
  destiny: Currency,
  value: number,
): Promise<ConversionResponse> => {
  const result: ConversionResponse = await convertCurrencyAmount(base, destiny, value);
  return result;
};
