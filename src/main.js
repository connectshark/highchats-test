import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import Stock from 'highcharts/modules/stock'
import More from 'highcharts/highcharts-more'
import Indicator from 'highcharts/modules/price-indicator'

Indicator(Highcharts)
More(Highcharts)
Stock(Highcharts)

Vue.use(HighchartsVue)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
