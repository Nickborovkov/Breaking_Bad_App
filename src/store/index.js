import Vue from 'vue'
import Vuex from 'vuex'
import characters from "./characters";
import episodes from "./episodes";
import deaths from "./deaths";
import quotes from "./quotes";
import common from "./common";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sideBar: false
  },
  mutations: {
    toggleSidebar (state) {
      state.sideBar = !state.sideBar
    },
  },
  getters: {
    getSideBar (state) {
      return state.sideBar
    }
  },
  modules: {
    characters,
    episodes,
    deaths,
    quotes,
    common,
  }
})
