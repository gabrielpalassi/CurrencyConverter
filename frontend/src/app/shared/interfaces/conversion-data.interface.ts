import { Currency } from '../../../../../shared/interfaces/currency.interface';
import { ConversionResponse } from '../../../../../shared/interfaces/conversion-response.interface';

export interface ConversionData {
  base: Currency;
  destiny: Currency;
  value: number | undefined;
  response: ConversionResponse | undefined;
}
