<template>
  <div class="header">
    <h1 class="mt-5">Welcome to memo.ry {{ msg }}!!</h1>
    <p class="lead">Drop a pin on the map and log your memories</p>
    <p>You are at: {{ coords.lat }}, {{ coords.lng }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Header',
  props: {
    msg: String
  },
  computed: {
    ...mapState([
      'coords'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
