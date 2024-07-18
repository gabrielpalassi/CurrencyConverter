import Currency from './currency.interface';
import ConversionResult from './conversion-result.interface';

export default interface ConversionTableResponse {
  base: Currency;
  result: ConversionResult[];
}
