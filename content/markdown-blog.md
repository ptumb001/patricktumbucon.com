---
title: Adding Support for Markdown-style Blog Posts in a Nuxt.js project
date: December 8, 2019
permalink: posts/markdown-blog
---

At my current job, I maintain and build on a machine learning platform to support our machine learning scientists. This involves a lot of OOP and functional programming (Python, Scala, etc) which I really enjoy working with. But I do miss working on front-end projects in my free time, one of those being my personal website. 

At the same time, I've always thought about starting a blog about dumb stuff I want to write about to a vague audience. Topics like coffee I'm currently drinking or books I enjoyed reading. My personal website is the perfect platform for this. So I'm going to document the process of implementing a blog on my website and see how this goes.

## Background

I used to develop websites using just HTML and CSS, with a few JavaScript animations. But as my projects got bigger and more complex, I found it inefficient when I had to copy/paste the same navigation bar, same footer, etc. for every page on the website. 

[Vue.js](https://vuejs.org/) is a JavaScript framework that makes it easy and approachable to get started with creating dynamic interfaces. Reusable templates (often called components) for these interfaces make it easy to specify a style once and continue using it through your project. 

[Nuxt.js](https://nuxtjs.org/) builds on top of Vue.js with some cool optimizations including:

- Server-side rendering
- Bundling and minifying CSS and JS
- Built-in routing and state management libraries

I'm definitely not at the level where I push the limits of what Nuxt.js can do, but I find it easy to work with for my personal website.

![](https://i.imgur.com/2GOQH1K.gif)

Isn't it pretty?

I've been a big fan of writing in Markdown recently. Markdown is a simple markup language with syntax that makes specifying rich text like **bold**, [links](https://vignette.wikia.nocookie.net/zelda/images/b/b1/Link_%28SSB_3DS_%26_Wii_U%29.png/revision/latest?cb=20130611202433), and `inline code` super easy. I use it mainly to write technical and design documentation at work. I write Markdown in an editor called [Typhora](https://www.typora.io/), which compiles markdown in a WYSIWYG fashion. I use this article from [Learn X in Y minutes](https://learnxinyminutes.com/docs/markdown/) as a reference if I ever forget Markdown syntax.

## Implementing the Blog

### Rough Requirements

- A feed of the X most recent posts on the home page
- Each post has:
  - Title
  - Body
  - Metadata
    - Date posted
  - A unique link where you can view the full post
- Markdown post-compilation should be styled seamlessly with the rest of my website while maintaining readability

### My First Post

#### YAML Front Matter

I'm writing this blog in my Markdown editor as I implement this in my website, so I'll have a Markdown file available to serve. Pretty meta.

In addition to writing Markdown though, I want to include some metadata about each post. I can include something called **YAML front matter** at the top of my Markdown file.  

Here is an example of YAML front matter with uncompiled Markdown:

```markdown
---
title: The Color of Law
author: Richard Rothstein
publishDate: May 2, 2017
---

# The Color of Law

Lorem ipsum dolor sit amet, **consectetur adipiscing elit**. Donec eget pellentesque risus. Vestibulum id [auctor](https://google.com/auctor) nisi. Nunc enim risus, interdum.

...
```

Including this information allows me to easily extract metadata when I bring it into my Nuxt.js project.

Here is the metadata I'm including in this post:

```markdown
---
title: Adding Support for Markdown-style Blog Posts in a Nuxt.js project
date: December 8, 2019
permalink: posts/markdown-blog
---
```



#### Loading Posts into Nuxt.js

I will be using [frontmatter-markdown-loader](https://github.com/hmsk/frontmatter-markdown-loader) to load my posts into Nuxt.js. It has a feature to compile Markdown directly into a Vue component so it fits my use case perfectly. Of course, it returns the YAML attributes I specify as well.

Navigating to my Nuxt.js project,

```bash
cd ~/code/patricktumbucon.com
```

I will then install frontmatter-markdown-loader with `yarn`.

```bash
yarn add frontmatter-markdown-loader
```

Now I need to tell Webpack to use this custom loader. You can do so inside `nuxt.config.js`. Initially, it will look something like this:

```javascript
module.exports = {
	mode: 'universal',
    head: {
        title:
        ...
    }
    ...
    build: {
        
    }
}
```

In the `build` property of this file, I'm going to specify: **"For .md files inside of the /content directory, load them with frontmatter-markdown-loader"**. 

```javascript
module.exports = {
	mode: 'universal',
    head: {
        title:
        ...
    }
    ...
    build: {
        extend (config) {
            config.module.rules.push({
                test:  /\.md$/,
                include: path.resolve(__dirname, "content"),
                loader: 'frontmatter-markdown-loader'
             });
        }
    }
}
```

> **Fun fact**: I was stuck for an hour because I accidently put `config.modules.rules` instead of `config.module.rules` and I'd get the error "Cannot read property 'modules' in undefined". 
>
> That was real fun figuring out.

Since I specified that there will be a `content` directory, I should probably create it.

```bash
mkdir content
```

In my Markdown editor, I'm saving my Markdown file inside of the `content` directory. 

```
content/
--| markdown-blog.md <-- Here it is!
```

Cool. Now `markdown-blog.md` is ready to be served in Nuxt.

#### Displaying the Post

Since I'm going to have a bunch of posts (hopefully lmao), it wouldn't make sense to make a separate Vue file for every single post. Instead, I'm going to use **dynamic routing** to generate a unique URL for every Markdown folder in the `content` directory I specified earlier.

For example, if I have 3 posts with file names as "markdown-blog.md", "coffee-week-5.md", and "my-plant-died.md", then I would want the routes to look like this:

```
https://patricktumbucon.com/posts/markdown-blog
https://patricktumbucon.com/posts/coffee-week-5
https://patricktumbucon.com/posts/my-plant-died
```

Inside of my Nuxt `pages` directory, I'm going to create another directory just for posts. I'll also create the template Vue file that all my posts will be rendered in. 

```bash
mkdir pages/posts && touch pages/posts/_slug.vue
```

The `pages` directory will now look like this:

```
pages/
--| index.vue
--| projects.vue
--| posts/
----| _slug.vue <-- We just created this!
```

A **slug** is the unique identifying part of a web address, typically at the end of the URL. Adding the underscore at the beginning of the file name tells Nuxt that this file will be dynamically routed. 

Now I'll add the template code in `_slug.vue`:

```javascript
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
    ...
</style>
```

Pay attention to `post.attributes.title` and `post.attributes.date` in the `<template>` section. This is how I retrieve the YAML FM information that I added in the Markdown file. I could have typed the title and date in Markdown instead of YAML, but it wouldn't be easily accessible in Nuxt if I took that approach.

In the `<script>` section, I'm importing the Markdown file that is specified in the URL. 

For example, let's say I navigated to `https://patricktumbucon.com/posts/markdown-blog` . My code will try to get the filepath `~/content/markdown-blog.md`. Remember how the slug is the unique part of the address? That slug must match a name of a file in the `content` directory.

But what if I navigated to `https://patricktumbucon.com/posts/LMAO-THIS-POST-DOESNT-EXIST`? 

Well first of all, why would I do that. But my code would catch the error (since the `import` statement would fail), log the error, and you would be greeted with an error page.

<img src="https://i.imgur.com/Q5gd43P.png" width=750>



After a little bit of CSS magic, we end up with this page you're reading right now when you navigate to `https://patricktumbucon.com/posts/markdown-blog`.

### A Page for All Posts

Cool, now I'm able to write posts in Markdown with YAML FM attributes without having to worry if the styling breaks on my website. But I still need a page that displays all my posts! Sure, you can find a post if you have the direct link. But no one would be able to find ALL my posts. 

I need to create a page with all my posts.

Fortunately, this shouldn't be too difficult. I already know how to load my Markdown files from the `content` directory, so there's not really anything new going on.

I'm going to create a new Vue file inside of the `pages/posts` directory.

```bash
touch pages/posts/index.vue
```

Now, the structure will look like this:

```
pages/
--| index.vue
--| projects.vue
--| posts/
----| _slug.vue
----| index.vue <-- We just created this!
```

The path of this new page that will host all of my posts will be in the route `https://patricktumbucon.com/posts/`

Now I'll add the template code inside `pages/posts/index.vue`:

```javascript
<template>
    <div class="my-posts">
        <h1>My Posts</h1>
        <ul>
            <li v-for="post in posts" :key="post.attributes.title">
                <nuxt-link :to="post.attributes.permalink">
                    {{ post.attributes.title }}					
                </nuxt-link>
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
```

Basically, I'm taking all of the Markdown files inside of the `content` directory, grabbing their YAML titles, and displaying each post's title as a link leading to the post.

Finally, I should update the header to include the link to this page. Ezpz.

I have a `Header.vue` component that I use throughout my website.

```javascript
<template>
  <div class="grid-header container">
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/about">About</nuxt-link>
    <nuxt-link to="/projects">Projects</nuxt-link>
    <nuxt-link to="/posts">Posts</nuxt-link>
  </div>
</template>

<script>

export default {
  
}

</script>

<style>
.grid-header {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

a {
  padding-top: 5%;
  text-align: center;
  font-weight: 700;
  outline: 0;
}
</style>
```

I just added a new `<nuxt-link>` element and changed `grid-template-columns` to support 4 items in a single row.

## What's Next?

I've been coding and writing this post for like 4 hours, so I think this is a good stopping point.

There are a few things I want to continue working on in the future:

- View count
- Filter by tags
- Supporting MDX for richer content
- Commenting system

I don't know how often I'll be posting here, but I did have a lot of fun with writing this one. Until next time!







