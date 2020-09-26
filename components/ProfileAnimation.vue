<template>
  <div class="col animation" 
       @mouseover="hoverAnimate" 
       @click="hoverAnimate">
    <img class="profile-img" 
         src="https://i.ibb.co/fGBvqS8/7762-F104-5889-4-A1-B-A30-C-995-B7-B554-CD0.png" /> 
    
    <svg id="morph" 
         viewBox="0 0 400 400" 
         xmlns="http://www.w3.org/2000/svg">
      <path class="morph" 
            fill="#00EBC7" 
            d="M37,-66.3C48.1,-57.7,57.4,-48.1,65.7,-36.9C74,-25.6,81.4,-12.8,83.2,1.1C85.1,15,81.5,30,73.8,42.3C66.1,54.6,54.4,64.3,41.5,69.6C28.5,74.9,14.2,75.8,0.8,74.4C-12.6,73,-25.3,69.3,-39.1,64.5C-53,59.8,-68.1,53.9,-78.1,43C-88.1,32,-93,16,-93.2,-0.1C-93.5,-16.3,-89.1,-32.6,-79.5,-44.3C-69.9,-56,-55.2,-63,-41.1,-69.8C-27,-76.7,-13.5,-83.3,-0.3,-82.8C13,-82.4,25.9,-74.9,37,-66.3Z" 
            transform="translate(100 100)" />
    </svg>

  </div>   
</template>

<script>
import anime from 'animejs'

export default {
  methods: {
    animate: function() {
      anime({
        targets: '.morph',
        d: [
          { 
            value: 'M32.9,-51.7C44.1,-50.4,55.9,-44.7,58.1,-35.4C60.3,-26,52.8,-13,53.4,0.3C54,13.7,62.6,27.4,63,41.3C63.5,55.2,55.8,69.3,43.9,75C32.1,80.7,16,78,5.2,68.9C-5.6,59.9,-11.2,44.4,-24.1,39.4C-37.1,34.3,-57.5,39.6,-60.9,34.8C-64.4,30,-50.9,15,-42.7,4.7C-34.6,-5.6,-31.9,-11.2,-28.4,-15.9C-24.9,-20.6,-20.5,-24.3,-15.7,-29.3C-10.8,-34.3,-5.4,-40.5,2.7,-45.2C10.8,-49.9,21.6,-53,32.9,-51.7Z',
          },
          { 
            value: 'M40.5,-66.9C54.5,-62,69.4,-55.3,75.6,-43.9C81.9,-32.5,79.4,-16.2,78.1,-0.7C76.8,14.7,76.7,29.5,70.5,41C64.3,52.4,52,60.6,39.2,66.8C26.5,73.1,13.2,77.4,-1.5,80.1C-16.3,82.7,-32.6,83.8,-44.2,76.8C-55.8,69.9,-62.7,55.1,-68.8,40.9C-74.8,26.8,-79.9,13.4,-79.6,0.2C-79.2,-13,-73.4,-26,-66.8,-39.1C-60.1,-52.1,-52.6,-65.2,-41.4,-71.6C-30.1,-78.1,-15,-78.1,-0.9,-76.5C13.2,-74.9,26.4,-71.7,40.5,-66.9Z',
            delay: 600
          }
        ],
        easing: 'easeInOutQuint',
        duration: 3000,
        delay: 400,
        direction: 'alternate',
        loop: true
      })
    },
    hoverAnimate: function() {
      
    } 
  },
  mounted() {
    this.animate();
  }
}
</script>

<style scoped>
  .profile-img {
    width: 400px;
  }

  #morph {
    position: absolute;
    top: 500;
    left: 550;
    z-index: -1;
    width: 500px;
  }
 
  @media only screen 
    and (min-device-width: 375px) 
    and (max-device-width: 667px) {
      .profile-img {
        width: 300px;
      }
      #morph {
        overflow: hidden;
        left: 0;
      }
    }

</style>