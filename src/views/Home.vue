<template>
  <div class="home">
  <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  <main role="main" class="flex-shrink-0">
    <div class="container">
      <Header msg="Amigo"/>
      <Map msg="Amigo"/>
    </div>
  </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Map from '@/components/Map.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Map
  }
}
</script>
