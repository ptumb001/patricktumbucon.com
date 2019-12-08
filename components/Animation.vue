<template>
  <div class="col animation grid grid-anim" @mouseover="toggleRadius" @click="toggleRadius">
  <div class="square yellow-red"></div>
  <div class="square yellow-red"></div>
  <div class="square yellow-red"></div>
  <div class="square yellow-red"></div>
  <div class="square yellow-red"></div>
  <div class="square yellow-red"></div>
  <div class="square yellow-red"></div>
  <div class="square yellow-red"></div>
  <div class="square yellow-red"></div>
  <div class="square yellow-red"></div>
  <div class="square yellow-red"></div>
  <div class="square yellow-red"></div>
  <div class="square yellow-red"></div>
  <div class="square yellow-red"></div>
  <div class="square yellow-red"></div>
  <div class="square yellow-red"></div>
  <div class="square yellow-red"></div>
  <div class="square yellow-red"></div>
  <div class="square yellow-red"></div>
  <div class="square yellow-red"></div>
  <div class="square yellow-red"></div>
  <div class="square yellow-red"></div>
  <div class="square yellow-red"></div>
  <div class="square yellow-red"></div>
  <div class="square yellow-red"></div>
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
            delay: anime.stagger(200, {
              grid: [5, 5],
              from: 'center'
            }),
            scale: 0.75,
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
    },
    toggleRadius: function() {
      let els = document.getElementsByClassName("square");
      if (els[0].style.borderRadius == "50%") {
        anime({
          targets: els,
          keyframes: [
            {
              borderRadius: 0,
              translateX: anime.stagger(-50, {
                grid: [5, 5],
                from: 'center',
                axis: 'x'
              }),
              translateY: anime.stagger(-50, {
                grid: [5, 5],
                from: 'center',
                axis: 'y'
              }),
              scale: 1.1,
              background: "linear-gradient(-45deg, rgba(24,102,239,1) 22%, rgba(49,255,147,1) 65%)"
            },
            {
              delay: 100,
              scale: 1
            }
          ],
          delay: anime.stagger(100, {
            grid: [5, 5],
            from: 'center'
          }),
          duration: 2000,
          easing: "easeInOutQuad"
        });
      }
      else {
        anime({
          targets: els,
          borderRadius: "50%",
          keyframes: [
            {
              borderRadius: "50%",
              scale: 1.2,
              background: "linear-gradient(-45deg, rgba(250,116,47,1) 22%, rgba(255,51,125,1) 100%)",
              translateX: anime.stagger(0, {
                grid: [5, 5],
                from: 'center',
                axis: 'x'
              }),
              translateY: anime.stagger(0, {
                grid: [5, 5],
                from: 'center',
                axis: 'y'
              }),
            },
            {
              delay: 100,
              scale: 1
            }
          ],
          delay: anime.stagger(100, {
            grid: [5, 5],
            from: 'center'
          }),
          duration: 2000,
          easing: "easeInOutQuad"
        });
      }
    } 
  },
  mounted() {
    this.animate();
  }
}
</script>

<style>
 
</style>