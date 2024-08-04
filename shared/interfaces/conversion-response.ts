import ConversionResult from './conversion-result';
import Currency from './currency';

export default interface ConversionResponse {
  base: {
    currency: Currency;
    amount: number;
  };
  result: ConversionResult;
}
