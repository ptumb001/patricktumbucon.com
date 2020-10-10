<template>
  <div class="container">
    <div class="grid grid-hero">
      <ProfileAnimation /> 

      <div class="col hero-content">
        <h1>Patrick Tumbucon</h1>
        <p class="subtitle">Software Developer, Petter of Shibas</p>
        <ul class="icon-list">
          <li class="icon-list-item">
            <a href="https://github.com/pattynextdoor">
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
            <a href="PatrickTumbuconResume.pdf">
              <i class="far fa-file-alt"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div> 
</template>

<script>
import DotAnimation from '@/components/DotAnimation'
import ProfileAnimation from '@/components/ProfileAnimation'
import anime from 'animejs'

export default {
  head() {
    return {
      title: 'Patrick Tumbucon',
      meta: [
        { name: 'og:title', content: 'Patrick Tumbucon'},
        { name: 'og:description', content: 'Patrick\'s personal website!'},
        { name: 'og:image', content: 'https://i.ibb.co/fGBvqS8/7762-F104-5889-4-A1-B-A30-C-995-B7-B554-CD0.png'},
        { name: 'twitter:creator', content: 'patrickisd3ad'},
      ]
    }
  },
  components: {
    DotAnimation,
    ProfileAnimation
  }
}
</script>

<style>
.grid-hero {
  grid-template-columns: 25% 75%;
  grid-gap: 15%;
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
  transition-duration: 500ms;
  padding-top: 0;
  color: #ff5470;

}

a:hover {
  background: linear-gradient(-45deg,rgba(49,255,147,1) 25%, rgba(24,102,239,1) 62%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
    .grid-hero {
      grid-gap: 0;
    }

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
