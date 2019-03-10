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
        <ul>
          <li>
            <a v-if="github"
               v-bind:href="github">GitHub</a>
          </li>
          <li>
            <a v-if="devpost"
               v-bind:href="devpost">Devpost</a>
          </li>
        </ul>
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
    description: String,
    github: String,
    devpost: String
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
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.card-img {
  width: 100%;
  display: block;
  margin: 0 auto;
}

.content {
  padding: 5%;
}

ul>li {
  display: inline;
}
</style>
