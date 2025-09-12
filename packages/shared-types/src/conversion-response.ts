import { ConversionResult } from "./conversion-result";
import { Currency } from "./currency";

export interface ConversionResponse {
  base: {
    currency: Currency;
    amount: number;
  };
  result: ConversionResult;
}
