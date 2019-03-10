<template>
 <div class="col animation grid grid-anim">
          
  <div class="square yellow-red sq-1"></div>
  <div class="square yellow-red sq-2"></div>
  <div class="square yellow-red sq-3"></div>
  <div class="square yellow-red sq-4"></div>
</div>   
</template>

<script>
import anime from 'animejs'

export default {
  methods: {
   animate: function() {
     anime({
      targets: ".square",
      keyframes: [
        {
          delay: anime.stagger(100),
          scale: 0.75,
          borderRadius: "50%",
          background: ["linear-gradient(-45deg, rgba(250,116,47,1) 22%, rgba(255,51,125,1) 100%)", "linear-gradient(-45deg, rgba(24,102,239,1) 22%, rgba(49,255,147,1) 65%)"]
        },
        {
          delay: 1000,
          borderRadius: "10%",
          background: "linear-gradient(-45deg, rgba(250,116,47,1) 22%, rgba(255,51,125,1) 100%)",
          scale: 1.1
        },
        {
          borderRadius: "50%",
          scale: 0.5,
        },
        {
          scale: 0.75,
          skew: "5deg",
          loop: true
        }
      ],
      easing: "spring(1, 80, 10, 0)"
     });

     anime({
     targets: "body",
     backgroundColor: ["#000", "#fff"],
     duration: 2000,
     easing: "easeOutQuart"
     });

     anime({
     targets: "h1, h2, p, li>a>i",
     color: ["#fff", "#000"],
     duration: 2000,
     easing: "easeOutQuart"
     });
    } 
  },
  mounted() {
    this.animate();
  }
}
</script>

<style>
 
</style>