import ConversionResult from '../../../../../shared/interfaces/conversion-result.interface';

export default interface ConversionTableResult extends ConversionResult {
  dailyChange?: number;
  chartOptions?: any;
}
