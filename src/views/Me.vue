<template>
  <div class="me">
  <main role="main" class="flex-shrink-0">
    <div class="container">
      <h1 class="mt-5">{{ getUser.fullName || `Me` }}</h1>
      <p class="lead">My page.</p>
      <section v-if="errored">
        <p>Please <a href="#/login-signup">login or sign up</a> to see your details.</p>
      </section>

      <section v-else>
        <div v-if="loading">Loading...</div>
        <div v-else>
          Welcome {{ getUser.fullName }}.
        </div>
      </section>
    </div>
  </main>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
import store from '../store'

export default {
  name: 'Me',
  components: {
    // TODO
  },
  methods: {
    ...mapActions([
      'logoutUser'
    ])
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
      URI: process.env.VUE_APP_URI || 'http://localhost:4000',
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted () {
    axios
      .get(`${this.URI}/me`, { headers: { Authorization: `Basic ${this.getAuthToken}` } })
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
