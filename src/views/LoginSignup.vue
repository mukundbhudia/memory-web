<template>
  <div class="notes">
    <main role="main" class="flex-shrink-0">
      <div class="container">
        <h1 class="mt-5">Login or Sign up</h1>
        <p class="lead">Fill out the details below to log in or sign up to the app.</p>
        <div class="log-entry-form">
          <b-form @submit="onSubmit" v-if="show">
            <b-form-group
              id="input-group-1"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.userName"
                type="email"
                required
                placeholder="Email address"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label-for="input-2">
              <b-form-input
                id="input-2"
                v-model="form.password"
                type="password"
                required
                placeholder="Password"
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'LoginSignup',
  // components: {
  //   NotesList
  // }
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.form.timeStamp = new Date()
      // store.dispatch('userSavesNote', { note: this.form })
      console.log(JSON.stringify(this.form))
      this.form = {
        noteTitle: '',
        note: '',
        timeStamp: null
      }
    }
  },
  data () {
    return {
      form: {
        userName: '',
        password: '',
        timeStamp: null
      },
      show: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
