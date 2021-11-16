<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="post in posts" :key="post.id">
      <p>{{ post.title }}</p>
      <router-link v-bind:to="`/posts/${post.id}`">
        <img v-bind:src="post.image" alt="" />
      </router-link>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to the blog!",
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
