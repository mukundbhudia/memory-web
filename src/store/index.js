import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: '',
    coords: { lat: 51.505, lng: -0.09 },
    mapZoomLevel: 13,
    notes: [],
    authToken: ''
  },
  getters: {
    getCoords: (state) => {
      return state.coords
    },
    getAuthToken: (state) => {
      return state.authToken
    }
  },
  mutations: {
    setCoords: (state, payload) => {
      state.coords.lat = payload.lat
      state.coords.lng = payload.lng
    },
    saveNote: (state, payload) => {
      state.notes.push(payload.note)
    },
    setMapZoomLevel: (state, payload) => {
      state.mapZoomLevel = payload.mapZoomLevel
    },
    setAuthToken: (state, payload) => {
      state.authToken = payload.authToken
    }
  },
  actions: {
    userPicksCoords: (context, coords) => {
      context.commit('setCoords', coords)
    },
    userSavesNote: (context, note) => {
      context.commit('saveNote', note)
    },
    userSetsZoom: (context, mapZoomLevel) => {
      context.commit('setMapZoomLevel', mapZoomLevel)
    },
    storeAuthToken: (context, authToken) => {
      context.commit('setAuthToken', authToken)
    }
  },
  modules: {
  }
})
