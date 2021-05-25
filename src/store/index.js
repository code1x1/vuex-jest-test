import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: '123',
    filter: {
      query: {
        level1: 'tests123'
      },
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
