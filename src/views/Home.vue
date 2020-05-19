<template>
  <div class="home">
  <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  <main role="main" class="flex-shrink-0">
    <div class="container">
      <Header/>
      <section v-if="errored">
        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
      </section>

      <section v-else>
        <div v-if="loading">Loading...</div>
        <div v-else>
          API says: {{ info }}
        </div>
      </section>
      <Map/>
      <LogEntryForm/>
    </div>
  </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Map from '@/components/Map.vue'
import LogEntryForm from '@/components/LogEntryForm.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    Header,
    Map,
    LogEntryForm
  },
  data () {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted () {
    const URI = process.env.URI || 'http://localhost:4000'
    axios
      .get(`${URI}/`)
      .then(response => {
        this.info = response.data.msg
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => { this.loading = false })
  }
}
</script>
