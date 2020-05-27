<template>
  <div class="me">
  <main role="main" class="flex-shrink-0">
    <div class="container">
      <h1 class="mt-5">Me</h1>
      <p class="lead">My page.</p>
      <section v-if="errored">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
      </section>

      <section v-else>
        <div v-if="loading">Loading...</div>
        <div v-else>
          API says: {{ info }}
        </div>
      </section>
    </div>
  </main>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Me',
  components: {
    // TODO
  },
  computed: {
    getAuthToken () {
      return this.$store.getters.getAuthToken
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
      .catch(error => {
        console.error(error)
        this.errored = true
      })
      .finally(() => { this.loading = false })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
