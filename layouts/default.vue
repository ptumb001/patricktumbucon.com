<template>
  <div>
    <Header />
    <nuxt v-on:toggleMode="this.darkMode=!this.darkMode"
          v-on:darkMode="this.darkMode"/>
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header
  },
  data: function() {
    return {
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans|Ubuntu+Mono');

p, h1, h2, h3, h4, h5, a, ul, li {
  font-family: 'Noto Sans', sans-serif;
  letter-spacing: 1px;
}

.container {
  padding: 0 35%;
}

p {
  line-height: 1.5;
}

.grid {
  display: grid;
}

.light-text {
  color: #fff;
}

.dark-text {
  color: #222;
}

.light-bg {
  background-color: #fff;
}

.dark-bg {
  background-color: #222;
}

</style>
