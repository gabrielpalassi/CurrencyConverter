import Currency from './currency.interface';
import ConversionTableResult from './conversion-table-result.interface';

export default interface ConversionTableResponse {
  base: Currency;
  result: ConversionTableResult[];
}
