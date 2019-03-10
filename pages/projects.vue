<template>
  <div>
    <h1>Projects</h1>
    <div class="projects grid">

      <Project 
        v-for="project in projects"
        v-bind:key="project.title"
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
          image: '/amplitude.gif',
          title: 'Amplitude',
          description: 'Browse through your Spotify recommendations with a clean interface. Save encountered songs to your Amplist.'
        },
        {
          image: '/runner.gif',
          title: 'Runner',
          description: 'A hardware implementation of the popular browser game Cuberunner. Dodge falling objects at increasing speed.'
        },
        {
          image: '/locus.png',
          title: 'Locus',
          description: 'Find your perfect neighborhood by utilizing location analytics, points of interest, and area indices.'
        },
        {
          image: '/seefood.png',
          title: 'Seefood',
          description: 'A nutrition tracker that uses computer vision and neural networks to identify what you\'re eating and provide nutritional information.'
        },
        {
          image: '/sweetnectarvalley.png',
          title: 'Sweet Nectar Valley',
          description: 'A virtual reality experience inspired by Stardew Valley. Chop down trees, plant crops, and interact with your farm animals.'
        }
      ]
    }
  }
}
</script>

<style>
h1 {
  text-align: center;
}

.projects {
  padding: 5% 15%;
  padding-bottom: 25%;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 15%;
  justify-items: center;
}
  
</style>