import ConversionResult from './conversion-result.interface';

export default interface ConversionTableResult extends ConversionResult {
  dailyChange?: number;
  chartOptions?: any;
}
