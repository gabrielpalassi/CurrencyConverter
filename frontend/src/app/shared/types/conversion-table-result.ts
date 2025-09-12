import { ConversionResult } from "@shared/types";

export interface ConversionTableResult extends ConversionResult {
  dailyChange?: number;
  chartOptions?: Highcharts.Options;
}
