<template>
  <div class="Show Post">
    <h1>{{ message }}</h1>
    <p>
      <b>title:</b>
      {{ post.title }}
    </p>
    <p>
      <b>body:</b>
      {{ post.body }}
    </p>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      post: {},
    };
  },
  created: function () {
    this.getPost();
  },
  methods: {
    getPost: function () {
      axios.get("posts/1").then((response) => {
        console.log("get post");
        console.log(response.data);
        this.post = response.data;
      });
    },
  },
};
</script>
