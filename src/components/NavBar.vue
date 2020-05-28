<template>
    <nav class="site-header sticky-top py-1">
      <div class="container d-flex flex-column flex-md-row justify-content-between">
        <router-link class="py-2" to="/" aria-label="Product">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mx-auto" role="img" viewBox="0 0 24 24" focusable="false"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
        </router-link>
        <router-link class="py-2 d-none d-md-inline-block" to="/">Home</router-link>
        <router-link class="py-2 d-none d-md-inline-block" to="/notes">Notes</router-link>
        <router-link class="py-2 d-none d-md-inline-block" to="/about">About</router-link>
        <router-link v-if="loggedIn" class="py-2 d-none d-md-inline-block" to="/me">{{ getUser.fullName }}</router-link>
        <router-link v-if="loggedIn" class="py-2 d-none d-md-inline-block" to="/logout">Logout</router-link>
        <router-link v-else class="py-2 d-none d-md-inline-block" to="/login-signup">Login/Sign up</router-link>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    getUser () {
      return this.$store.getters.getUser
    },
    loggedIn () {
      if (this.getUser.id !== '') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.site-header {
  background-color: rgba(0, 0, 0, .85);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
}
.site-header a {
  color: #999;
  transition: ease-in-out color .15s;
}
.site-header a:hover {
  color: #fff;
  text-decoration: none;
}
</style>
