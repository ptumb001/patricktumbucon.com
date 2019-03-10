<template>
 <div class="container">
    <section>
      <div class="grid grid-hero">

       <Animation /> 

        <div class="col hero-content">
          <h1>Patrick Tumbucon</h1>
          <p class="subtitle">Software Developer, Community Leader</p>
          <p class="subtitle" id="toggle" v-on:click="toggleDisplay">Dark mode?</p>
          <ul>
            <li>
              <a href="https://github.com/ptumb001">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://codepen.io/worldwithpatrick">
                <i class="fab fa-codepen"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/PTumbucon">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/patricktumbucon">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="PatrickTumbuconResume.pdf">
                <i class="far fa-file-alt"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
    </section>
            
    <section>
      <h2>What I've been up to</h2>
      <p>
        I'm currently a senior computer engineering undergraduate at 
        <a href="http://ucr.edu">UC Riverside</a>. From there, I'll
        be heading to 
        <a href="http://amazon.com">Amazon</a>. 
      </p>
      <p>
        Previously, I've increased search presence at
        <a href="http://esri.com">Esri</a>, professionally developed students at 
        <a href="http://acmucr.org">ACM@UCR</a>, and organized multiple events at 
        <a href="http://citrushack.com">Citrus Hack</a>.
      </p>
    </section>
    
    <section>
      <h2>Some things I've made</h2>

      <p>
        <a href="https://github.com/ptumb001/locus">Locus</a>,
        <a href="https://github.com/JohnPhamous/seefood">SeeFood</a>, and
        <a href="https://github.com/ptumb001/amplitude">Amplitude</a>
        are a few projects I've worked on. I also design and develop websites
        for student organizations. You can find more on 
        <a href="https://github.com/ptumb001">GitHub</a>.
      </p>
    </section>
    
    <section>
      <h2>Ramblings</h2>
      <p>
        I believe that the best software is fixated on the problem itself, rather than its competitors.
        I'm passionate about working in the front end, but I also enjoy working on complex back end systems.
      </p>
      <p>
        In my free time, I enjoy relaxing at coffee shops, climbing rocks, playing strategy games (and Smash Bros), and attending music festivals.
      </p>
      <p>
        If you'd like to schedule a meeting with me (whether virtual or in-person), feel free to do so 
        <a href="https://www.meetingbird.com/m/BJqmXcBmQ">here</a>.
      </p>
    </section>

  </div> 
</template>

<script>
import Animation from '~/components/Animation'
import anime from 'animejs'

export default {
  components: {
    Animation
  },
  props: {
    darkMode: Boolean
  },
  methods: {
    toggleDisplay: function() {
      this.$emit('toggleMode');
      let currBackground = document.getElementsByTagName("body")[0].style.backgroundColor;
      console.log(currBackground);
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
              delay: anime.stagger(100),
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
              delay: anime.stagger(100),
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
  grid-template-columns: 50% 50%;
}

.col {
  justify-self: center;
}

.hero-content {
  padding-left: 5%;
}

ul {
  list-style-type: none;
}

li {
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
  width: 50px;
  height: 50px;

  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

  border-radius: 10%;

}

.sq-2 {
  transform: rotate(90);
}

.sq-3 {
  transform: rotate(-90);
}

.sq-4 {
  transform: rotate(180);
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
  font-size: 30px;
  margin: 2% 0;
}

h2 {
  font-size: 20px;
  margin: 2% 0;
}

p {
  font-size: 14px;
}

@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  and (-webkit-min-device-pixel-ratio: 2) { 
    .container {
      padding: 0;
    }

    .col {
      grid-column: 1 / span 2;
    }

    .hero-content {
      text-align: center;
    }

}
</style>
