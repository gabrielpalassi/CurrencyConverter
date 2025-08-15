import { Currency } from './currency';

export interface CurrencyData {
  currency: Currency;
  rate: number;
  chartData: [x: number, y: number][];
}
