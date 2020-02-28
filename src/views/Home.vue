<template>
  <div class="home">
  <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  <main role="main" class="flex-shrink-0">
    <div class="container">
      <Header msg="Amigo"/>
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
  }
}
</script>
