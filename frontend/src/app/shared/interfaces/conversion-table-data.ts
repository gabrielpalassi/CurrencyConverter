import ConversionTableResponse from '../../../../../shared/interfaces/conversion-table-response';
import ConversionTableResult from './conversion-table-result';

export default interface ConversionTableData extends ConversionTableResponse {
  result: ConversionTableResult[] | undefined;
}
