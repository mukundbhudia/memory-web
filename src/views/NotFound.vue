<template>
  <div class="about">
  <main role="main" class="flex-shrink-0">
    <div class="container">
      <h1 class="mt-5">This page cannot be found</h1>
      <p class="lead">The page at "<strong>{{ this.$route.fullPath }}</strong>" cannot be found.</p>
    </div>
  </main>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>
