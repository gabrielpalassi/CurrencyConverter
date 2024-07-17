import { ConversionResult } from "./conversion-result.interface";

export interface ConversionTableResult extends ConversionResult {
  dailyChange?: number;
  chartOptions?: Highcharts.Options;
}
