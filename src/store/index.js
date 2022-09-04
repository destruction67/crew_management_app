import Vue from 'vue'
import Vuex from 'vuex'

import LoginModule from "@/store/modules/LoginModule";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
    isLoading: state => state.isLoading,
  },
  mutations: {
    set_is_loading: (state, payload) => {
      state.isLoading = payload;
    },
  },
  actions: {
  },
  modules: {
    LoginModule,
  }
})
