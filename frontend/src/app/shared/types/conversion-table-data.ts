import { ConversionTableResponse } from '@shared/types';
import { ConversionTableResult } from './conversion-table-result';

export interface ConversionTableData extends ConversionTableResponse {
  result: ConversionTableResult[] | undefined;
}
