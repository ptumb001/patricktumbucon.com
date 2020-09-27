<template>
    <div class="my-posts">
        <h1>Recent Posts</h1>
        <ul>
            <li v-for="post in posts" :key="post.attributes.title">
                <p>{{post.attributes.date}} - 
                  <nuxt-link :to="post.attributes.permalink">{{ post.attributes.title }}</nuxt-link></p>
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
        posts: imports.sort((a, b) => parseInt(b.attributes.epoch) - parseInt(a.attributes.epoch))
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

  p {
    display: list-item;
    margin: 2%;
    margin-left: 0;
    line-height: 1.5;
    font-size: 18px;
    list-style: none;
  }

</style>