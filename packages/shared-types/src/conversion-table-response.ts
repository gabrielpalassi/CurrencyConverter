import { Currency } from "./currency";
import { ConversionResult } from "./conversion-result";

export interface ConversionTableResponse {
  base: Currency | undefined;
  result: ConversionResult[] | undefined;
}
