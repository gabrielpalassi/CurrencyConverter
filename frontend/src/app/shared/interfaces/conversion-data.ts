import Currency from '../../../../../shared/interfaces/currency';
import ConversionResponse from '../../../../../shared/interfaces/conversion-response';

export default interface ConversionData {
  base: Currency;
  target: Currency;
  amount: number | undefined;
  response: ConversionResponse | undefined;
}
