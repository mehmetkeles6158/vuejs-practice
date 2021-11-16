<template>
  <div class="Show Post">
    <h1>{{ message }}</h1>
    <p>
      <b>id:</b>
      {{ post.id }}
    </p>
    <p>
      <b>title:</b>
      {{ post.title }}
    </p>
    <p>
      <b>body:</b>
      {{ post.body }}
    </p>
    <p>
      <b>image_url:</b>
      {{ post.image }}
    </p>
    <router-link v-bind:to="`/posts/${post.id}/edit`">Edit Post</router-link>
    <p><button v-on:click="destroyPost()">Delete Post</button></p>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to the post!",
      post: {},
    };
  },
  created: function () {
    this.getPost();
  },
  methods: {
    getPost: function () {
      axios.get("posts/" + this.$route.params.id).then((response) => {
        console.log("get post");
        // console.log(this.$route.params.id);
        console.log(response.data);
        this.post = response.data;
      });
    },
    destroyPost: function () {
      console.log("deleting post...");
      axios.delete(`/posts/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.$router.push("/posts");
      });
    },
  },
};
</script>
