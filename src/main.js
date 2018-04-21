// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import Highchart from 'highcharts'
import drilldown from 'highcharts/js/modules/drilldown'
import variablepie from 'highcharts/js/modules/variable-pie'
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(Highchart)
variablepie(Highchart)
drilldown(Highchart)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
