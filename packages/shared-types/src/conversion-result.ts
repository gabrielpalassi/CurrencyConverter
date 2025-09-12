import { Currency } from "./currency";

export interface ConversionResult {
  currency: Currency;
  convertedAmount: number;
  chartData: [x: number, y: number][];
}
