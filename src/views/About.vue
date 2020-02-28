<template>
  <div class="about">
  <main role="main" class="flex-shrink-0">
    <div class="container">
      <AboutInfo/>
    </div>
  </main>
  </div>
</template>

<script>
import AboutInfo from '@/components/AboutInfo.vue'

export default {
  name: 'About',
  components: {
    AboutInfo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
