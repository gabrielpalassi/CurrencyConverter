import { ConversionTableResult } from "./conversion-table-result.interface";
import { Currency } from "./currency.interface";

export interface ConversionTableResponse {
  base: Currency;
  result: ConversionTableResult[];
}
