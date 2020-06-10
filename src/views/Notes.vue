<template>
  <div class="notes">
  <main role="main" class="flex-shrink-0">
    <div class="container">
      <NotesList/>
    </div>
  </main>
  </div>
</template>

<script>
import NotesList from '@/components/NotesList.vue'

export default {
  name: 'Notes',
  components: {
    NotesList
  }
}
</script>
