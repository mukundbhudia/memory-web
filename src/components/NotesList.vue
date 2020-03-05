<template>
  <div class="notes-list">
    <h1 class="mt-5">Your notes</h1>
    <p class="lead">Click on each item to see your notes...</p>

    <b-list-group>
      <b-list-group-item v-for="note in notes" :key="note.index" href="#" class="flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ truncateString(note.noteTitle) }}</h5>
          <small>{{ note.timeStamp.toLocaleString() }}</small>
        </div>
        <p class="mb-1">
          {{ truncateString(note.note) }}
        </p>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NotesList',
  computed: {
    ...mapState([
      'notes'
    ])
  },
  methods: {
    truncateString: (str, length, ending) => {
      if (length == null) {
        length = 70
      }
      if (ending == null) {
        ending = '...'
      }
      if (str.length > length) {
        return str.substring(0, length - ending.length) + ending
      } else {
        return str
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
