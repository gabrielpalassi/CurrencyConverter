import Currency from './currency.interface';

export default interface ConversionResult {
  currency: Currency;
  value: number;
  chartData: [x: number, y: number][];
}
