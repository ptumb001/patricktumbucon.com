<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header
  }  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Space+Mono');

* {
  font-family: 'Space Mono', monospace;
}

.container {
  padding: 0 35%;
}

.grid {
  display: grid;
}

</style>
