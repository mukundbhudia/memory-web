<template>
  <div id="app">
    <NavBar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    Footer,
    NavBar
  }
}
</script>

<style>
.container {
  max-width: 960px;
}

/*
 * Extra utilities
 */

.flex-equal > * {
  -ms-flex: 1;
  flex: 1;
}
@media (min-width: 768px) {
  .flex-md-equal > * {
    -ms-flex: 1;
    flex: 1;
  }
}

.overflow-hidden { overflow: hidden; }
</style>
