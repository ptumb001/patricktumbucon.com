<template>
  <div>
    <h1>Projects</h1>
    <div class="projects grid">

      <Project 
        data-tilt
        data-tilt-reverse="true"
        data-tilt-scale="1.1"

        v-for="project in projects"
        v-bind:key="project.id"
        v-bind:title="project.title"
        v-bind:image="project.image"
        v-bind:description="project.description"
      ></Project> 

    </div>
    
  </div>
</template>

<script>
import Tilt from 'vanilla-tilt'
import Project from '~/components/Project'

export default {
  components: {
    Project
  },
  data: function() {
    return {
      projects: [
        {
          id: 1,
          image: 'https://i.imgur.com/MKqTaPu.png',
          title: 'Example',
          description: 'lorem ipsum asdjfkl;'
        },
        {
          id: 2,
          image: 'https://i.imgur.com/MKqTaPu.png',
          title: 'Example 2',
          description: 'lorem ipsum as well lmao'
        }
      ]
    }
  },
  methods: {
    tilt: function() {
      const projects = document.getElementsByClassName('project');

      Tilt.init(projects, {
      });
    }
  },
  mounted: function() {
    this.tilt();
  }
}
</script>

<style>
h1 {
  text-align: center;
}

.projects {
  padding: 0 15%;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
}
  
</style>