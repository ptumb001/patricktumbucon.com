<template>
  <div class="grid-header container">
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="projects">Projects</nuxt-link>
  </div>
</template>

<script>

export default {
  
}

</script>

<style>
.grid-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

a {
  padding-top: 5%;
  text-align: center;
  font-weight: 700;
  outline: 0;
}
</style>
