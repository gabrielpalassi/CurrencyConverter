import Currency from './currency.interface';

export default interface ConversionResult {
  currency: Currency;
  convertedAmount: number;
  chartData: [x: number, y: number][];
}
