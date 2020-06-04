import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const emptyUserObject = {
  id: '',
  userName: '',
  firstName: '',
  lastName: '',
  fullName: ''
}

export default new Vuex.Store({
  state: {
    apiEndpoint: process.env.VUE_APP_URI || 'http://localhost:4000',
    user: emptyUserObject,
    loggedIn: false,
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
      const localAuthToken = localStorage.getItem('authToken')
      if (localAuthToken === null) {
        localStorage.setItem('authToken', state.authToken)
      } else if (localAuthToken !== null) {
        state.authToken = localAuthToken
      }
      return state.authToken
    },
    getUser: (state) => {
      const localUser = localStorage.getItem('user')
      if (localUser === null) {
        localStorage.setItem('user', JSON.stringify(state.user))
      } else if (localUser !== null && localUser !== '') {
        state.user = JSON.parse(localUser)
      }
      return state.user
    }
  },
  mutations: {
    setUser: (state, payload) => {
      state.user.id = payload.id
      state.user.userName = payload.userName
      state.user.firstName = payload.firstName
      state.user.lastName = payload.lastName
      state.user.fullName = `${state.user.firstName} ${state.user.lastName}`
      localStorage.setItem('user', JSON.stringify(state.user))
    },
    setLoggedIn: (state, payload) => {
      state.loggedIn = payload.loggedIn
    },
    logoutUser: (state, payload) => {
      state.user.id = ''
      state.user.userName = ''
      state.user.firstName = ''
      state.user.lastName = ''
      state.user.fullName = ''
      state.authToken = ''
      localStorage.setItem('authToken', '')
      localStorage.setItem('user', '')
    },
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
      localStorage.setItem('authToken', state.authToken)
    }
  },
  actions: {
    persistUser: (context, user) => {
      context.commit('setUser', user)
    },
    setLoggedIn: (context, loggedIn) => {
      context.commit('setLoggedIn', loggedIn)
    },
    logoutUser: (context) => {
      context.commit('logoutUser')
    },
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
