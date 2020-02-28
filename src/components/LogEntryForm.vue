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

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>

    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>
export default {
  name: 'LogEntryForm',
  data () {
    return {
      form: {
        noteTitle: '',
        note: '',
        coords: { lng: 0, lat: 0 }
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      console.log(JSON.stringify(this.form))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
