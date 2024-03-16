export const chartConfig: Highcharts.Options = {
  accessibility: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  title: {
    text: ''
  },
  legend: {
    enabled: false
  },
  chart: {
    margin: 0,
    backgroundColor: 'transparent'
  },
  boost: {
    enabled: true,
    useGPUTranslations: true,
    usePreallocated: true
  },
  series: [
    {
      type: 'area',
      color: 'rgba(59, 130, 246, 1)',
    }
  ],
  xAxis: {
    visible: false,
    type: 'datetime',
    minPadding: 0,
    maxPadding: 0
  },
  yAxis: {
    visible: false,
  },
  plotOptions: {
    area: {
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 1,
          x2: 1,
          y2: 1
        },
        stops: [
          [0, 'rgba(255, 255, 255, 0)'],
          [0.1, 'rgba(59, 130, 246, 0.1)'],
          [1, 'rgba(59, 130, 246, 0.5)'],
        ]
      },
      marker: {
        radius: 2
      },
      lineWidth: 1,
      lineColor: {
        linearGradient: {
          x1: 0,
          y1: 1,
          x2: 1,
          y2: 1
        },
        stops: [
          [0, 'rgba(255, 255, 255, 0)'],
          [0.1, 'rgba(59, 130, 246, 0.5)'],
          [0.2, 'rgba(59, 130, 246, 1)'],
          [1, 'rgba(59, 130, 246, 1)'],
        ]
      },
      states: {
        hover: {
          lineWidth: 1
        }
      },
      threshold: null
    }
  }
};
