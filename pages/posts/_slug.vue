<template>
  <div class="blog-post">
    <div class="post-title">
      <h1 class="title-text">{{ post.attributes.title }}</h1>
    </div>
    <div class="post-date">
      <p class="date-text">{{ post.attributes.date }}</p>
    </div>
    <div class="content" v-html="post.html"></div>
  </div>
</template>

<script>
  import Prism from '~/plugins/prism'

  export default {
    head() {
      let post = this.post
      return {
        title: post.attributes.title,
        meta: [
          { name: 'og:type', content: 'article' },
          { name: 'og:title', content: post.attributes.title},
          { name: 'og:description', content: post.attributes.description},
          { name: 'og:image', content: post.attributes.image},
          { name: 'twitter:creator', content: 'patrickisd3ad'},
        ]
      }
    },
    async asyncData({ params }) {
      try {
        let post = await import(`~/content/${params.slug}.md`);
        console.debug(post)
        return {
          post
        }
      } catch(err) {
        console.debug(err)
        return false
      }
    },
    mounted() {
      Prism.highlightAll()
    }
  }
</script>

<style scoped>
  .blog-post {
    padding: 0 25%;
    margin: 0 auto;
    padding-bottom: 5%;
  }

  .post-title {
    margin-top: 5%;
  }

  .post-date {
    color: #6a737d;
    font-style: italic;
  }

  .content >>> h1 {
    font-size: 2.5em;
  }

  .content >>> h2 {
    font-size: 2.25em;
  }
  
  .content >>> h3 {
    font-size: 2em;
  }
  
  .content >>> h4 {
    font-size: 1.5em;
  }
  .content >>> p, .content >>> li {
    font-size: 20px;
    letter-spacing: 1px;
  }

  .content >>> ul {
    list-style-type: disc;
  }

  .content >>> li {
    display: list-item;
    margin: 2%;
    line-height: 1.5;
  }

  .content >>> ul > li {
    margin-left: 3%;
  }

  .content >>> code {
    font-family: 'Ubuntu Mono', monospace;
  }

  .content >>> blockquote {
    border-left: 4px solid #dfe2e5;
    color: #6a737d;
    padding-left: 2em;
  }

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px) 
  { 
    .blog-post {
      padding: 0 6%;
    } 

    .content >>> blockquote {
      margin: 0;
    }
  }


</style>