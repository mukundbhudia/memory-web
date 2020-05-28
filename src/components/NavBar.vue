<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">Memory</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#/">Home</b-nav-item>
          <b-nav-item href="#/notes">Notes</b-nav-item>
          <b-nav-item href="#/about">About</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right v-if="loggedIn">
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>{{ getUser.fullName }}</em>
            </template>
            <b-dropdown-item href="#/me">My profile</b-dropdown-item>
            <b-dropdown-item href="#/logout">Log Out</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item v-else href="#/login-signup">Login/Sign up</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
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
