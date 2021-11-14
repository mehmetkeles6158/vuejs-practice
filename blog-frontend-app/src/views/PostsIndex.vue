<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p v-for="post in posts" :key="post.id">
      {{ post.body }}
      <img v-bind:src="post.image" alt="" />
    </p>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to the Blog vue.js!",
      posts: [],
    };
  },
  created: function () {
    this.postsindex();
  },
  methods: {
    postsindex: function () {
      console.log("loading posts");
      axios.get("/posts").then((response) => {
        console.log(response.data);
        this.posts = response.data;
      });
    },
  },
};
</script>
