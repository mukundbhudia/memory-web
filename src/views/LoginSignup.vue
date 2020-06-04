<template>
  <div class="notes">
    <main role="main" class="flex-shrink-0">
      <div class="container">

        <b-alert
          class="mt-5"
          variant="danger"
          dismissible
          fade
          :show="showIncorrectPasswordWarn"
          @dismissed="showIncorrectPasswordWarn=false"
        >
          The email address and/or password you entered was incorrect, please try again.
        </b-alert>

        <h1 class="mt-5">Login or Sign up</h1>
        <p class="lead">Fill out the details below to log in or sign up to the app.</p>
        <div>
          <b-tabs content-class="mt-3">
            <b-tab title="Login" active>
              <div class="log-entry-form">
                <b-form @submit="onLoginSubmit" v-if="show">
                  <b-form-group
                    id="input-group-1"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="loginForm.userName"
                      type="email"
                      required
                      placeholder="Email address"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-2" label-for="input-2">
                    <b-form-input
                      id="input-2"
                      v-model="loginForm.password"
                      type="password"
                      required
                      placeholder="Password"
                    ></b-form-input>
                  </b-form-group>

                  <b-button type="submit" variant="primary">Log in</b-button>
                </b-form>
              </div>
            </b-tab>

            <b-tab title="Sign up">
              <b-form @submit="onSignUpSubmit" v-if="show">
               <b-form-group
                  id="input-group-0"
                  label-for="input-0"
                >
                  <b-form-input
                    id="input-0"
                    v-model="signUpForm.fullName"
                    type="text"
                    required
                    placeholder="Your full name here"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  id="input-group-1"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="signUpForm.userName"
                    type="email"
                    required
                    placeholder="Email address"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="signUpForm.password"
                    type="password"
                    required
                    placeholder="Password"
                  ></b-form-input>
                </b-form-group>

                <b-button type="submit" variant="primary">Sign up</b-button>
              </b-form>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import axios from 'axios'
import store from '../store'

export default {
  name: 'LoginSignup',
  // components: {
  //   NotesList
  // }
  methods: {
    ...mapActions([
      'storeAuthToken',
      'setLoggedIn',
      'persistUser'
    ]),
    onLoginSubmit (evt) {
      evt.preventDefault()
      this.loginForm.timeStamp = new Date()
      this.postLogin({
        userName: this.loginForm.userName,
        password: this.loginForm.password
      })
      this.loginForm = {
        userName: '',
        password: '',
        timeStamp: null
      }
    },
    onSignUpSubmit (evt) {
      evt.preventDefault()
      this.signUpForm.timeStamp = new Date()
      // store.dispatch('userSavesNote', { note: this.form })
      console.log(JSON.stringify(this.signUpForm))
      this.postSignUp({
        fullName: this.signUpForm.fullName,
        userName: this.signUpForm.userName,
        password: this.signUpForm.password,
        timeStamp: this.signUpForm.timeStamp
      })
      this.signUpForm = {
        fullName: '',
        userName: '',
        password: '',
        timeStamp: null
      }
    },
    postLogin (data) {
      axios
        .post(`${this.URI}/login`, data)
        .then(response => {
          if (response.data.msg && response.data.msg === 'loggedIn') {
            store.dispatch('storeAuthToken', { authToken: response.data.token })
            store.dispatch('persistUser', response.data.user)
            store.dispatch('setLoggedIn', { loggedIn: true })
            window.location.href = '/#/me'
          } else if (response.data.msg && response.data.msg === 'userOrPasswordIncorrect') {
            this.showIncorrectPasswordWarn = true
            window.location.href = `/#/login-signup?error=${response.message}`
          }
        })
        .catch(error => {
          console.log(error)
          // this.errored = true
        })
        .finally(() => {
          // this.loading = false
        })
    },
    postSignUp (data) {
      axios
        .post(`${this.URI}/signup`, data)
        .then(response => {
          console.log(response.data.msg)
          // this.info = response.data.msg
        })
        .catch(error => {
          console.log(error)
          // this.errored = true
        })
        .finally(() => {
          // this.loading = false
        })
    }
  },
  data () {
    return {
      showIncorrectPasswordWarn: false,
      URI: this.$store.state.apiEndpoint,
      loginForm: {
        userName: '',
        password: '',
        timeStamp: null
      },
      signUpForm: {
        fullName: '',
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
