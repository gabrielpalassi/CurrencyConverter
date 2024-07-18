import Currency from '../../../shared/interfaces/currency.interface';
import ConversionResponse from '../../../shared/interfaces/conversion-response.interface';
import { data } from './data.mock';

export const convertCurrencyAmount = async (
  base: Currency,
  destiny: Currency,
  value: number,
): Promise<ConversionResponse> => {
  // Simulate currency conversion logic
  return {
    base: {
      currency: base,
      value,
    },
    result: {
      currency: destiny,
      value: value * 0.85,
      chartData: data,
    },
  };
};
