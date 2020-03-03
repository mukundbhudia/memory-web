<template>
  <div class="log-entry-form">
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Note tite:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.noteTitle"
          type="text"
          required
          placeholder="Enter note title"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your note:" label-for="input-2">
        <b-form-textarea
          id="input-2"
          v-model="form.note"
          required
          placeholder="Enter your note here"
          rows="8"
        ></b-form-textarea>
      </b-form-group>

      <b-form-group inline
        id="input-group-3"
        label="Your chosen coordinates:"
      >
        <b-form inline>
          <b-input-group prepend="Lng" class="mb-2 mr-sm-2 mb-sm-0">
            <b-input readonly id="inline-form-input-username" :value="coords.lat"></b-input>
          </b-input-group>

          <b-input-group prepend="Lng" class="mb-2 mr-sm-2 mb-sm-0">
            <b-input readonly id="inline-form-input-username" :value="coords.lng"></b-input>
          </b-input-group>
        </b-form>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>

    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LogEntryForm',
  computed: {
    ...mapState([
      'coords'
    ])
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.form.position.lat = this.coords.lat
      this.form.position.lng = this.coords.lng
      console.log(JSON.stringify(this.form))
    }
  },
  data () {
    return {
      form: {
        noteTitle: '',
        note: '',
        timeStamp: new Date(),
        position: { lat: 0, lng: 0 }
      },
      show: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
