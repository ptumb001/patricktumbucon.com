<template>
  <div>
    <Header />
    <nuxt v-on:toggleMode="this.darkMode=!this.darkMode"
          v-bind:darkMode="this.darkMode"/>
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
      darkMode: false
    }
  },
  computed: {
    toggleMode: function() {
      console.log('toggleMode function called');
      let els = document.querySelectorAll('h1, h2, p, li>a>i');
      if (this.darkMode) {
        for (let i = 0; i < els.length; i++) {
          els[i].classList.remove('light-bg');
          els[i].classList.remove('dark-text');
          els[i].classList.add('dark-bg');
          els[i].classList.add('light-text');
        }
      }
      else {
        for (let i = 0; i < els.length; i++) {
          els[i].classList.remove('dark-bg');
          els[i].classList.remove('light-text');
          els[i].classList.add('light-bg');
          els[i].classList.add('dark-text');
        }
      }
    }
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
