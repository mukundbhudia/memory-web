<template>
  <div class="logout">
  <main role="main" class="flex-shrink-0">
    <div class="container">
      <h1 class="mt-5">Logout?</h1>
      <p class="lead">Are you sure you want to log out {{ getUser.fullName || `Me` }}?</p>
      <section v-if="authStatus.errored">
        <p>Please <a href="#/login-signup">login or sign up</a> to see your details.</p>
      </section>

      <section v-else>
        <div v-if="authStatus.loading">Loading...</div>
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
import store from '../store'
import auth from '../auth'

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
