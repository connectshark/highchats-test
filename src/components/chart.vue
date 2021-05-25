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
        tooltip: {
          enabled: false
        },
        title: {
          text: 'AAPL Historical'
        },
        chart: {
          ignoreHiddenSeries: false
        },
        credits: {
          enabled: false
        },
        xAxis: [{
          plotLines: [{
            dashStyle: 'dash',
            value: 1559136600000,
            color: '#ccc'
          }]
        }],
        yAxis: [{
          labels: {
            align: 'right',
            x: -3
          },
          height: '90%',
          lineWidth: 2,
          resize: {
            enabled: true
          }
        },
        {
          labels: {
            align: 'right',
            x: -3
          },
          top: '90%',
          height: '10%',
          offset: 0,
          lineWidth: 2,
          visible: false
        }],

        series: [{
          type: 'line',
          data: [
            [1558359000000, 45.77],
            [1558445400000, 46.65],
            [1558531800000, 45.69],
            [1558618200000, 44.92],
            [1558704600000, 44.74],
            [1559050200000, 44.56],
            [1559136600000, 44.35]
          ],
          states: {
            inactive: {
              enabled: false
            }
          }
        }, {
          type: 'candlestick',
          data: [[1558359000000, 45.88, 46.09, 45.07, 45.77, 154449200],
            [1558445400000, 46.31, 47, 46.17, 46.65, 113459200],
            [1558531800000, 46.17, 46.43, 45.64, 45.69, 118994400],
            [1558618200000, 44.95, 45.13, 44.45, 44.92, 146118800],
            [1558704600000, 45.05, 45.53, 44.65, 44.74, 94858800],
            [1559050200000, 44.73, 45.15, 44.48, 44.56, 111792800],
            [1559136600000, 44.1, 44.84, 44, 44.35, 113924800]],
          dataGrouping: {
            units: [['week', [1]], ['month', [1, 2, 3, 4, 6]]]
          },
          upColor: '#32BAA0',
          upLineColor: '#32BAA0',
          color: '#FC5F5F',
          lineColor: '#FC5F5F',
          lastPrice: {
            enabled: true,
            color: '#ccc'
          },
          states: {
            inactive: {
              enabled: false
            }
          }
        }, {
          type: 'column',
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
          },
          states: {
            inactive: {
              enabled: false
            }
          }
        }]
      }
    }
  }
}
</script>
