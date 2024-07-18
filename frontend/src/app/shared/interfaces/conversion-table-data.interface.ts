import ConversionTableResponse from '../../../../../shared/interfaces/conversion-table-response.interface';
import ConversionTableResult from './conversion-table-result.interface';

export default interface ConversionTableData extends ConversionTableResponse {
  result: ConversionTableResult[];
}
