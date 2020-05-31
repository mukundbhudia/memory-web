<template>
  <footer class="footer mt-auto py-3">
    <div class="container pull-left">
      <span class="text-muted">Memory</span>
    </div>
    <div class="container pull-right">
      <span class="text-muted" v-if="errored">API: <b-icon-exclamation-circle></b-icon-exclamation-circle></span>
      <div v-else>
        <span class="text-muted" v-if="loading">API: <b-icon-clock></b-icon-clock></span>
        <span class="text-muted" v-else>API: <b-icon-check-circle></b-icon-check-circle></span>
      </div>
    </div>
  </footer>
</template>

<script>
import { BIconClock, BIconCheckCircle, BIconExclamationCircle } from 'bootstrap-vue'
import axios from 'axios'

export default {
  name: 'Footer',
  components: {
    BIconClock,
    BIconCheckCircle,
    BIconExclamationCircle
  },
  data () {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted () {
    const URI = process.env.VUE_APP_URI || 'http://localhost:4000'
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html body div#app footer.footer.mt-auto.py-3 {
  margin-top: 10px !important;
}

.footer {
  background-color: #f5f5f5;
}

.footer > .container {
  padding-right: 15px;
  padding-left: 15px;
}
</style>
