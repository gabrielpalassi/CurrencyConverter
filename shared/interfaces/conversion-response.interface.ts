import ConversionResult from './conversion-result.interface';
import Currency from './currency.interface';

export default interface ConversionResponse {
  base: {
    currency: Currency;
    value: number;
  };
  result: ConversionResult;
}