<template>
  <div class="logout">
  <main role="main" class="flex-shrink-0">
    <div class="container">
      <h1 class="mt-5">Logout?</h1>
      <p class="lead">Are you sure you want to log out {{ getUser.fullName || `Me` }}?</p>
      <section v-if="errored">
        <p>Please <a href="#/login-signup">login or sign up</a> to see your details.</p>
      </section>

      <section v-else>
        <div v-if="loading">Loading...</div>
        <div v-else>
          <b-button class="mr-2" variant="primary" @click="logout">Log out</b-button>
          <b-button class="mr-2" variant="light" @click="cancelLogout">Cancel</b-button>
        </div>
      </section>
    </div>
  </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import axios from 'axios'
import store from '../store'

export default {
  name: 'Logout',
  components: {
    // TODO
  },
  methods: {
    ...mapActions([
      'logoutUser'
    ]),
    logout () {
      console.log('logging out...')
      store.dispatch('logoutUser')
      window.location.href = '#/'
    },
    cancelLogout () {
      window.history.back()
    }
  },
  computed: {
    getAuthToken () {
      return this.$store.getters.getAuthToken
    },
    getUser () {
      return this.$store.getters.getUser
    }
  },
  data () {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted () {
    axios
      .get(`${this.$store.state.apiEndpoint}/me`, { headers: { Authorization: `Basic ${this.getAuthToken}` } })
      .then(response => {
        this.info = response.data.msg
      })
      .catch((error, data) => {
        if (error.response.data.msg && error.response.data.msg === 'Auth token inavalid' && error.response.status === 403) {
          console.log('Token expired, logging out...')
          store.dispatch('logoutUser')
        } else {
          console.error(error)
        }
        this.errored = true
      })
      .finally(() => { this.loading = false })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
