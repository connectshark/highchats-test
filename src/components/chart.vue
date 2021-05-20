<template>
  <highcharts :constructorType="'stockChart'" :options="chartOptions"></highcharts>
</template>

<script>
export default {
  data () {
    return {
      chartOptions: {
        navigator: {
          enabled: false
        },
        rangeSelector: {
          enabled: false
        },
        scrollbar: {
          enabled: false
        },
        title: {
          text: 'AAPL Historical'
        },
        yAxis: [{
          labels: {
            align: 'right',
            x: -3
          },
          title: {
            text: 'OHLC'
          },
          height: '60%',
          lineWidth: 2,
          resize: {
            enabled: true
          }
        }, {
          labels: {
            align: 'right',
            x: -3
          },
          title: {
            text: 'Volume'
          },
          top: '65%',
          height: '35%',
          offset: 0,
          lineWidth: 2
        }],
        tooltip: {
          split: true
        },

        series: [{
          type: 'candlestick',
          name: 'AAPL',
          data: [[1558359000000, 45.88, 46.09, 45.07, 45.77, 154449200],
            [1558445400000, 46.31, 47, 46.17, 46.65, 113459200],
            [1558531800000, 46.17, 46.43, 45.64, 45.69, 118994400],
            [1558618200000, 44.95, 45.13, 44.45, 44.92, 146118800],
            [1558704600000, 45.05, 45.53, 44.65, 44.74, 94858800],
            [1559050200000, 44.73, 45.15, 44.48, 44.56, 111792800],
            [1559136600000, 44.1, 44.84, 44, 44.35, 113924800]],
          dataGrouping: {
            units: [['week', [1]], ['month', [1, 2, 3, 4, 6]]]
          }
        }, {
          type: 'column',
          name: 'Volume',
          data: [[1558359000000, 154449200],
            [1558445400000, 113459200],
            [1558531800000, 118994400],
            [1558618200000, 146118800],
            [1558704600000, 94858800],
            [1559050200000, 111792800],
            [1559136600000, 113924800]],
          yAxis: 1,
          dataGrouping: {
            units: [['week', [1]], ['month', [1, 2, 3, 4, 6]]]
          }
        }]
      }
    }
  }
}
</script>
