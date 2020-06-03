<template>
  <div class="me">
  <main role="main" class="flex-shrink-0">
    <div class="container">
      <h1 class="mt-5">{{ getUser.fullName || `Me` }}</h1>
      <p class="lead">My page.</p>
      <section v-if="authStatus.errored">
        <p>Please <a href="#/login-signup">login or sign up</a> to see your details.</p>
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
