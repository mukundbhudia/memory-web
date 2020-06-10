<template>
  <div class="me">
  <main role="main" class="flex-shrink-0">
    <div class="container">
      <h1 class="mt-5">{{ `Welcome ${getUser.firstName}` || `Me` }}</h1>
      <p class="lead">My page.</p>
      <section v-if="authStatus.errored">
        <p>Please <router-link to="/login-signup">login or sign up</router-link> to see your details.</p>
      </section>

      <section v-else>
        <div v-if="authStatus.loading">Loading...</div>
        <div v-else>
          Welcome {{ getUser.fullName }}.
        </div>
      </section>
    </div>
  </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import auth from '../auth'

export default {
  name: 'Me',
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
      authStatus: {
        info: null,
        loading: true,
        errored: false
      }
    }
  },
  mounted () {
    this.authStatus = auth.authenticate()
  }
}
</script>
