<template>
  <div class="project">
    <div class="card">
      <img class="card-img" 
           v-bind:src="image" 
           v-bind:alt="title">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    image: String,
    title: String,
    description: String
  }
}
</script>

<style>
.project {
  border: 1px solid black;
  padding: 5%;
}

.card-img {
  max-width: 500px;
}
</style>
