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

</style>