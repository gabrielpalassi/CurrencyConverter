export function getChartOptions(
  chartOptions: Highcharts.Options,
  baseCode: string,
  targetCode: string,
  chartData: any, // eslint-disable-line @typescript-eslint/no-explicit-any
  windowInnerWidth: number,
): Highcharts.Options {
  const updatedChartOptions = {
    ...chartOptions,
    series: [
      {
        ...chartOptions.series![0],
        name: `${baseCode} to ${targetCode}`,
        data: chartData,
      },
    ],
  };

  if (windowInnerWidth < 640) {
    updatedChartOptions.plotOptions!.spline = {
      ...chartOptions.plotOptions!.spline,
      states: {
        hover: {
          enabled: false,
        },
      },
    };

    updatedChartOptions.plotOptions!.areaspline = {
      ...chartOptions.plotOptions!.areaspline,
      states: {
        hover: {
          enabled: false,
        },
      },
    };

    updatedChartOptions.tooltip = {
      enabled: false,
    };
  }

  return updatedChartOptions;
}
