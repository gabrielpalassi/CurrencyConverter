import Currency from './currency';

export default interface ConversionResult {
  currency: Currency;
  convertedAmount: number;
  chartData: [x: number, y: number][];
}
