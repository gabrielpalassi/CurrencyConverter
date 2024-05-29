export const tableChartConfig: Highcharts.Options = {
  accessibility: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
  title: {
    text: '',
  },
  legend: {
    enabled: false,
  },
  chart: {
    margin: 0,
    backgroundColor: 'transparent',
  },
  boost: {
    enabled: true,
    useGPUTranslations: true,
    usePreallocated: true,
  },
  series: [
    {
      type: 'line',
      color: 'rgba(59, 130, 246, 1)',
    },
  ],
  xAxis: {
    visible: false,
    type: 'datetime',
    minPadding: 0,
    maxPadding: 0,
  },
  yAxis: {
    visible: false,
  },
  plotOptions: {
    line: {
      marker: {
        radius: 2,
      },
      lineWidth: 1.5,
      states: {
        hover: {
          lineWidth: 1.5,
        },
      },
      threshold: null,
    },
  },
};
