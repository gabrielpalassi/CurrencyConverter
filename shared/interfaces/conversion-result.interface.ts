import { Currency } from "./currency.interface";

export interface ConversionResult {
  currency: Currency;
  value: number;
  chartData: [x: number, y: number][];
}
