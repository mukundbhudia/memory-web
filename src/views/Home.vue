<template>
  <div class="home">
  <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  <main role="main" class="flex-shrink-0">
    <div class="container">
        <b-alert
          class="mt-5"
          variant="primary"
          dismissible
          fade
          :show="showMessage"
          @dismissed="showMessage=false"
        >
          {{ message }}
        </b-alert>
      <Header/>
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

export default {
  name: 'Home',
  components: {
    Header,
    Map,
    LogEntryForm
  },
  data () {
    return {
      showMessage: false,
      message: ''
    }
  },
  mounted () {
    const queryParams = this.$route.query
    if (queryParams && queryParams.loggout && queryParams.loggout === 'true') {
      this.showMessage = true
      this.message = "You're now logged out."
    }
  }
}
</script>
