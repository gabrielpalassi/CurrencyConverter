import { ConversionTableResponse } from "@shared/types";
import { ConversionTableResult } from "@/app/shared/types/conversion-table-result";

export interface ConversionTableData extends ConversionTableResponse {
  result: ConversionTableResult[] | undefined;
}
