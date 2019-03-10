<template>
  <div class="project"
       data-tilt
       data-tilt-reverse="true"
       data-tilt-scale="1.1">
    <div class="card">
      <img class="card-img" 
           v-bind:src="image" 
           v-bind:alt="title">
      <div class="content">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Tilt from 'vanilla-tilt'

export default {
  props: {
    image: String,
    title: String,
    description: String
  },
  methods: {
    tilt: function() {
      const proj = document.querySelectorAll('.project');
      Tilt.init(proj);
    }
  },
  mounted: function() {
    this.tilt();
  }
}
</script>

<style>
.project {
  border: 1px solid black;
  width: 75%;
}

.card-img {
  width: 100%;
  display: block;
  margin: 0 auto;
}

.content {
  padding: 5%;
}
</style>
