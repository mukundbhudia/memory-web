<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">Memory</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/" tag="b-nav-item">Home</router-link>
          <router-link to="/notes" tag="b-nav-item">Notes</router-link>
          <router-link to="/about" tag="b-nav-item">About</router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right v-if="loggedIn">
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>{{ getUser.fullName }}</em>
            </template>
            <router-link to="/me" tag="b-dropdown-item">My profile</router-link>
            <router-link to="/logout" tag="b-dropdown-item">Log out</router-link>
          </b-nav-item-dropdown>
          <router-link v-else to="/login-signup" tag="b-nav-item">Login/Sign up</router-link>
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
