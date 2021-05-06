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
        v-bind:github="project.github"
        v-bind:devpost="project.devpost"
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
          image: '/okizeme.png',
          title: 'Okizeme',
          description: 'High level fighting game content. I\'m working with friends to release written content based around fighting games, streaming, and more!',
          github: 'https://github.com/pattynextdoor/okizeme-app'
        },
        {
          image: '/amplitude.gif',
          title: 'Amplitude',
          description: 'Browse through your Spotify recommendations with a clean interface. Save encountered songs to your Amplist.',
          github: 'https://github.com/pattynextdoor/amplitude',
          devpost: 'https://devpost.com/software/amplitude'
        },
        {
          image: '/runner.gif',
          title: 'Runner',
          description: 'A hardware implementation of the popular browser game Cuberunner. Dodge falling objects at increasing speed.',
          github: 'https://github.com/pattynextdoor/runner'
        },
        {
          image: '/locus.png',
          title: 'Locus',
          description: 'Find your perfect neighborhood by utilizing location analytics, points of interest, and area indices.',
          github: 'https://github.com/pattynextdoor/locus',
          devpost: 'https://devpost.com/software/locus-7gm5wd'
        },
        {
          image: '/seefood.png',
          title: 'Seefood',
          description: 'A nutrition tracker that uses computer vision and neural networks to identify what you\'re eating and provide nutritional information.',
          github: 'https://github.com/johnphamous/seefood',
          devpost: 'https://www.hackerearth.com/challenges/hackathon/biohack/dashboard/ec470b9/submission/'
        },
        {
          image: '/sweetnectarvalley.png',
          title: 'Sweet Nectar Valley',
          description: 'A virtual reality experience inspired by Stardew Valley. Chop down trees, plant crops, and interact with your farm animals.',
          github: 'https://github.com/pattynextdoor/sweet-nectar-valley'
        }
      ]
    }
  }
}
</script>

<style scoped>
.projects {
  padding: 5% 15%;
  padding-bottom: 25%;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 15%;
  justify-items: center;
}

h1 {
  text-align: center;
}

@media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px) {
    h1 {
      margin-top: 5%;
      text-align: center;
    }

    .projects {
      grid-template-columns: 1fr;
      grid-row-gap: 5%;
    }
}


  
</style>