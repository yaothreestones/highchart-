import Vue from 'vue';
import Vuex from 'vuex';
import Ajax from '@/components/ajax/axios'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    add(state) {
      state.count++
    },
    reduce(state) {
      state.count--
    }
  }
})
