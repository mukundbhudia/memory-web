<template>
  <div class="header">
    <h1 class="mt-5">Your memories, on a map.</h1>
    <p class="lead">Drop a pin on the map, make a note and log your memories.</p>
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
