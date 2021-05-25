<template>
  <div class="gauge">
    <highcharts :options="chartOptions"></highcharts>
    <div class="gauge-details">
      <div class="gauge-details-title">
        <p>Oscillators</p>
      </div>
      <ul class="gauge-details-meter">
        <li class="meter-item" v-for="item in meters" :key="item.id">
          <span>{{item.unit}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gauge',
  data () {
    return {
      meters: [
        {
          unit: 'STRONG\nSELL',
          id: 1
        },
        {
          unit: 'SELL',
          id: 2
        },
        {
          unit: 'NEUTRAL',
          id: 3
        },
        {
          unit: 'BUY',
          id: 4
        },
        {
          unit: 'STRONG\nBUY',
          id: 5
        }
      ],
      chartOptions: {
        chart: {
          type: 'gauge',
          plotBackgroundColor: '#12023E',
          spacing: 0,
          height: '100%'
        },
        series: [{
          data: [3.4],
          dataLabels: {
            enabled: false
          },
          tooltip: {
            enabled: false
          },
          enableMouseTracking: false,
          dial: {
            radius: '60%',
            backgroundColor: {
              linearGradient: { x1: 1, y1: 0, x2: 0, y2: 0 },
              stops: [
                [0, '#fff'],
                [1, '#000']
              ]
            },
            baseWidth: 6,
            topWidth: 4,
            baseLength: '0%',
            rearLength: '0%'
          },
          pivot: {
            radius: 0
          }
        }],

        title: {
          text: undefined
        },

        credits: {
          enabled: false
        },

        pane: {
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%'],
          size: '70%',
          background: [{
            backgroundColor: {
              linearGradient: { x1: 0, y1: 0, x2: 0, y2: 0.6 },
              stops: [
                [0, '#D1D4DB'],
                [0.5, '#12023E']
              ]
            },
            borderWidth: 0,
            outerRadius: '100%'
          }]
        },
        yAxis: {
          min: 0,
          max: 20,
          minorTicks: false,

          tickWidth: 0,
          tickLength: 0,
          labels: {
            enabled: false
          },
          plotBands: [{
            from: 0,
            to: 4,
            color: '#EF5450'
          }, {
            from: 4,
            to: 8,
            color: '#F59895'
          }, {
            from: 8,
            to: 12,
            color: '#D1D4DB'
          }, {
            from: 12,
            to: 16,
            color: '#8FF1CA'
          }, {
            from: 16,
            to: 20,
            color: '#32BAA0'
          }]
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
*{
  padding: 0;
  margin: 0;
  list-style: none;
}

.gauge{
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  .gauge-details{
    position: absolute;
    width: 85%;
    height: 75%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    .gauge-details-title{
      p{
        font-size: 16px;
        line-height: 2;
        color: #fff;
      }
    }
    .gauge-details-meter{
      position: relative;
      width: 100%;
      height: 70%;
      .meter-item{
        position: absolute;
        span{
          white-space: pre-line;
          color: #fff;
          text-align: center;
        }
        &:nth-child(1){
          left: -5%;
          bottom: 0;
        }
        &:nth-child(2){
          left: 15%;
          bottom: 45%;
        }
        &:nth-child(3){
          left: 0;
          right: 0;
          margin: auto;
          bottom: 60%;
        }
        &:nth-child(4){
          right: 15%;
          bottom: 45%;
        }
        &:nth-child(5){
          right: -5%;
          bottom: 0;
        }
      }
    }
  }
}
</style>
