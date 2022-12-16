import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    backgroundDark: false,
    openSidebar: false,
    activeTab: {
      id: 1,
      text: ''
    }

  },
  mutations: {
    SET_BACKGROUND_DARK (state, payload) {
      state.backgroundDark = payload
    },
    SET_OPEN_SIDEBAR (state, payload) {
      state.openSidebar = payload
    },
    SET_TAB (state, payload) {
      state.activeTab = payload
    }
  }

})

export default store
