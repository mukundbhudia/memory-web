<template>
  <div class="header">
    <h1 class="mt-5">Hi {{ msg }}, this is a sticky footer with fixed navbar</h1>
    <p class="lead">Pin a footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. A fixed navbar has been added with <code>padding-top: 60px;</code> on the <code>main &gt; .container</code>.</p>
    <p>Back to <a href="/docs/4.4/examples/sticky-footer/">the default sticky footer</a> minus the navbar.</p>
    <div id="date-picker">
      <label for="example-datepicker">Choose a date</label>
      <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
      <p>Value: '{{ value }}'</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  data () {
    return {
      value: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
