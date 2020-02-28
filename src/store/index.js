import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: '',
    coords: { lng: 0, lat: 0 },
    timeStamp: new Date()
  },
  getters: {
    getCoords: (state) => {
      return state.coords
    }
  },
  mutations: {
    setCoords (state, payload) {
      state.coords.lat = payload.lat
      state.coords.lng = payload.lng
    }
  },
  actions: {
    userPicksCoords: (context, coords) => {
      context.commit('setCoords', coords)
    }
  },
  modules: {
  }
})
