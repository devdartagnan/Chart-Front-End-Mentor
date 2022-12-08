import ApexCharts from 'apexcharts'
import data from './data.json'

const day = data.map((e:any) => (e.day))
const amount = data.map((e:any) => (e.amount))

var options = {
  plotOptions: {
    bubble: {
      zScaling: false,
      minBubbleRadius: 400,
      maxBubbleRadius: 400,
    },
    bar: {
      borderRadius: 4,
      columnWidth: "70%"
    }
  },
  chart: {
    type: 'bar',
    toolbar: {
      show: false
    },
    width: '100%',
  },
  series: [{
    name: 'Amount',
    data: amount
  }],
  xaxis: {
    categories: day,
    tickPlacement: 'off'
  },
  yaxis: {
    show: false
  },
  fill: {
    colors: '#ec775f'
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false
  },
  axisTicks: {
    show: false,
  },
  
states: {
  active: {
      filter: {
          type: 'lighten',
          value: 0.35,
      }
  },
},
  tooltip: {
    enabled: true,
    enabledOnSeries: undefined,
    shared: false,
    followCursor: true,
    intersect: true,
    inverseOrder: false,
    custom: function ({ series, seriesIndex, dataPointIndex, w }: any) {
      var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];

      return 'R$: ' + data
    },
    fillSeriesColor: false,
    theme: false,
    style: {
      fontSize: '16px',
      fontFamily: undefined,
    },
    onDatasetHover: {
      highlightDataSeries: false,
    },
    y: {
      formatter: undefined
    },
    x: {
      show: false
    },
    z: {
      formatter: undefined,
    },
    marker: {
      show: false,
    },
    fixed: {
        enabled: false,
        position: 'top',
        offsetX: 80,
        offsetY: 0,
    },
    }
}

let chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();