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
@import url('https://fonts.googleapis.com/css?family=Noto+Sans|Ubuntu+Mono|Ubuntu|Varela+Round');
@import url(//db.onlinewebfonts.com/c/9475d6a0b79c164f9f605673714e75d9?family=Circular+Std+Medium);

@font-face {
  font-family: 'Circular Std Medium';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('~assets/CircularStdMedium.ttf') format('truetype');
}

@font-face {
  font-family: 'Circular Std Bold';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('~assets/CircularStdBold.ttf') format('truetype');
}

body {
  background-color: #fffffe;
}

p, h1, h2, h3, h4, h5, a, ul, li {
  letter-spacing: 1px;
}

p, a, ul, li {
  font-family: 'Circular Std Medium', sans-serif;
  color: #1b2d45;
}

h1, h2, h3, h4, h5 {
  font-family: 'Circular Std Bold', sans-serif;
  color: #00214d;
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
