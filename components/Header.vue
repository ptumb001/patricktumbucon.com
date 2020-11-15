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
  grid-template-columns: repeat(5, 1fr);

  font-size: 1.5em;
}

.grid-header > a {
  padding-top: 10% !important;
  text-align: center;
  font-weight: 700;
  outline: 0;
}

@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) {
    .grid-header {
      grid-template-columns: repeat(3, 1fr);
      font-size: 1em;
    }
  }
</style>
