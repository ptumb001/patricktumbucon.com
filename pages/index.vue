<template>
  <div class="container">
    <div class="grid grid-hero">
      <Animation /> 

      <div class="col hero-content">
        <h1>Patrick Tumbucon</h1>
        <p class="subtitle">Software Developer, Petter of Shibas</p>
        <ul class="icon-list">
          <li class="icon-list-item">
            <a href="https://github.com/ptumb001">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li class="icon-list-item">
            <a href="https://codepen.io/worldwithpatrick">
              <i class="fab fa-codepen"></i>
            </a>
          </li>
          <li class="icon-list-item">
            <a href="https://twitter.com/PTumbucon">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="icon-list-item">
            <a href="https://linkedin.com/in/patricktumbucon">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li class="icon-list-item">
            <a href="~assets/PatrickTumbuconResume.pdf">
              <i class="far fa-file-alt"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div> 
</template>

<script>
import Animation from '@/components/Animation'
import anime from 'animejs'

export default {
  components: {
    Animation
  },
  methods: {
    toggleDisplay: function() {
      this.$emit('toggleMode');
      let currBackground = document.getElementsByTagName("body")[0].style.backgroundColor;
      let toggleText = document.getElementById("toggle");
      
      // Currently light, turn dark
      if (currBackground == "rgb(255, 255, 255)") {
        // Background animation
        anime({
          targets: "body",
          backgroundColor: "#000",
          delay: 300,
          duration: 1000,
          easing: "easeOutQuart"
        });

        // Text animation
        anime({
          targets: "h1, h2, p, li>a>i",
          color: "#fff",
          delay: 300,
          duration: 1000,
          easing: "easeOutQuart"
        });

        // Squares animation
        anime({
          targets: ".square",
          keyframes: [
            {
              skew: "20deg",
              duration: 300, 
            },
            {
              delay: anime.stagger(200, {
                grid: [5, 5],
                from: 'center'
              }),
              skew: "0",
              scale: 0.75,
              background: "linear-gradient(-45deg, rgba(24,102,239,1) 22%, rgba(49,255,147,1) 65%)",
              duration: 1000,
            }
          ],
          easing: "easeOutQuart"
        });
        toggleText.innerHTML = "Light mode?";
      }

      // Currently dark, turn light
      else {
        // Background animation
        anime({
          targets: "body",
          background: "#fff",
          delay: 300,
          duration: 1000,
          easing: "easeOutQuart"
        });

        // Text animation
        anime({
          targets: "h1, h2, p, li>a>i",
          color: "#000",
          delay: 300,
          duration: 1000,
          easing: "easeOutQuart"
        });

        // Squares animation
        anime({
          targets: ".square",
          keyframes: [
            {
              skew: "-20deg",
              duration: 300 
            },
            {
              delay: anime.stagger(150, {
                  grid: [5, 5],
                  from: 'center'
              }),
              skew: "0",
              scale: 0.75,
              background: "linear-gradient(-45deg, rgba(250,116,47,1) 22%, rgba(255,51,125,1) 100%)",
              duration: 1000
            }
          ],
          easing: "easeOutQuart"
        });
        toggleText.innerHTML = "Dark mode?";
      }
    }
  }
}
</script>

<style>
.grid-hero {
  grid-template-columns: 25% 75%;
}

.grid-anim {
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;  
}

.col {
  justify-self: center;
}

.hero-content {
  padding-left: 5%;
}

ul.icon-list {
  list-style-type: none;
}

li.icon-list-item {
  display: inline;
  margin: 0 5%;
}

li>a>i {
  font-size: 20px;
  transition-duration: 200ms;
  color: #000;
}

li>a:hover {
  text-decoration: none;
}

li>a>i:hover {
  background: linear-gradient(to right, #1a2a6c, #b21f1f, #fdbb2d);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#toggle:hover {
  background: linear-gradient(to right, #40e0d0, #ff8c00, #ff0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

section {
  margin: 15% 5%;
}

#toggle {
  text-decoration: underline;
  cursor: pointer;
}

.square {
  width: 25px;
  height: 25px;

  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

  border-radius: 50%;

}

a {
  text-decoration: none;
  color: #0475b1;
  transition-duration: 500ms;
}

a:hover {
  background: linear-gradient(-45deg,rgba(49,255,147,1) 25%, rgba(24,102,239,1) 62%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: underline;
}

h1 {
  font-size: 50px;
  margin: 2% 0;
}

h2 {
  font-size: 20px;
  margin: 2% 0;
}

p {
  font-size: 25px;
}

.grid-hero {
  margin-top: 25%;
}

.container {
  padding: 0 25%;
}

@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  { 
    .container {
      padding: 0;
    }

    .col {
      grid-column: 1 / span 2;
    }

    .hero-content {
      text-align: center;
    }

    .grid-anim {
      margin: 10%;
    }

    h1 {
      font-size: 30px;
    }

    h2 {
      font-size: 14px;
    }

    p.subtitle {
      font-size: 20px;
    }

    li>a>i {
      font-size: 20px;
    }
}
</style>
