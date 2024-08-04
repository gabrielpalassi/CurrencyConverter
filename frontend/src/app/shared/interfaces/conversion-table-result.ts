import ConversionResult from '../../../../../shared/interfaces/conversion-result';

export default interface ConversionTableResult extends ConversionResult {
  dailyChange?: number;
  chartOptions?: Highcharts.Options;
}
