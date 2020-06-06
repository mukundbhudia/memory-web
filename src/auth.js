import axios from 'axios'
import store from './store'

export default {
  authenticate: () => {
    const output = {
      info: null,
      loading: true,
      errored: false
    }

    axios
      .get(`${store.state.apiEndpoint}/me`, {
        headers:
          { 'x-access-token': store.getters.getAuthToken }
      })
      .then(response => {
        output.info = response.data.msg
      })
      .catch((error) => {
        if (error.response &&
          error.response.data.msg &&
          error.response.data.msg === 'Auth token inavalid' &&
          error.response.status === 403
        ) {
          console.debug('Token expired, logging out...')
          store.dispatch('logoutUser')
        } else if (error.response &&
          error.response.data &&
          error.response.data === 'Unauthorized' &&
          error.response.status === 401
        ) {
          console.debug('No auth token, need user to login')
          store.dispatch('logoutUser')
        } else {
          console.error(error)
        }
        output.errored = true
      })
      .finally(() => {
        output.loading = false
      })

    return output
  }
}
