<template>
  <div class="grid-header container">
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/about">About</nuxt-link>
    <nuxt-link to="/projects">Projects</nuxt-link>
    <nuxt-link to="/posts">Posts</nuxt-link>
  </div>
</template>

<script>

export default {
  
}

</script>

<style>
.grid-header {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

a {
  padding-top: 5%;
  text-align: center;
  font-weight: 700;
  outline: 0;
}
</style>
