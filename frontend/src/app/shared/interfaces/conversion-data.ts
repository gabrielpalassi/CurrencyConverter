import Currency from '../../../../../shared/interfaces/currency';
import ConversionResponse from '../../../../../shared/interfaces/conversion-response';

export default interface ConversionData {
  base: Currency | undefined;
  target: Currency | undefined;
  amount: number | undefined;
  response: ConversionResponse | undefined;
}
