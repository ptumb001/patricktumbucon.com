<template>
  <div class="project"
       data-tilt
       data-tilt-glare 
       data-tilt-max-glare="0.2"
       data-tilt-reverse="true"
       data-tilt-scale="1.25">
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
  transform-style: preserve-3d;
  transform: perspective(1000px);
}

.card-img {
  width: 100%;
  display: block;
  margin: 0 auto;
}

.content {
  padding: 5%;
}

h2, p, ul>li {
  transform: translateZ(100px);
}

ul {
  padding-left: 0;
}

ul>li {
  display: inline;
  margin-left: 0;
}

@media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px) {
    .project {
      width: 100%;
    }

    p {
      font-size: 14px !important;
    }

}
</style>
