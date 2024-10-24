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
      type: 'spline',
      color: 'rgba(37, 99, 235, 1)',
      marker: {
        enabled: false,
      },
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
    spline: {
      marker: {
        radius: 2,
      },
      lineWidth: 1.2,
      states: {
        hover: {
          lineWidth: 1.2,
        },
      },
      threshold: null,
    },
  },
};
