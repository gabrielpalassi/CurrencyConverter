import Currency from './currency';
import ConversionResult from './conversion-result';

export default interface ConversionTableResponse {
  base: Currency | undefined;
  result: ConversionResult[] | undefined;
}
