<template>
    <div class="my-posts">
        <h1>My Posts</h1>
        <ul>
            <li v-for="post in posts" :key="post.attributes.title">
                <nuxt-link :to="post.attributes.permalink">{{ post.attributes.title }}</nuxt-link>
            </li>
        </ul>

    </div>
</template>
<script>
  import Prism from '~/plugins/prism'
  export default {
    async asyncData() {
      const resolve = require.context("~/content/", true, /\.md$/)
      const imports = resolve.keys().map((key) => {
        const [, name] = key.match(/\/(.+)\.md$/);
        return resolve(key);
      });
      return {
        posts: imports
      }
    },
    mounted() {
      Prism.highlightAll()
    }
  }
</script>

<style scoped>
  .my-posts {
    padding: 0 25%;
    margin-top: 5%;
  }
  .blog-post {
    padding: 0 25%;
    margin: 0 auto;
  }

  .post-title {
    margin-top: 5%;
  }

  .post-date {
    color: #6a737d;
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
    list-style-type: '- ';
  }

  .content >>> li {
    display: default;
  }

  .content >>> code {
    font-family: 'Ubuntu Mono', monospace;
  }

  .content >>> blockquote {
    border-left: 4px solid #dfe2e5;
    color: #6a737d;
    padding-left: 2em;
  }


</style>