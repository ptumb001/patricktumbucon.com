<template>
  <div class="project">
    <div class="card">
      <img class="card-img" 
           v-bind:src="image" 
           v-bind:alt="title">
      <div class="content">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    title: String,
    description: String
  }
}
</script>

<style>
.project {
  border: 1px solid black;
  width: 75%;
}

.card-img {
  width: 100%;
  display: block;
  margin: 0 auto;
}

.content {
  padding: 5%;
}
</style>
