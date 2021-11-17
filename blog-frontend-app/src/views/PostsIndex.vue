<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div class="row">
      <div class="col-sm-4" v-for="post in posts" :key="post.id">
        <div class="card">
          <img v-bind:src="post.image" class="card-img-top" v-bind:alt="post.body" />
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.body }}.</p>
            <a v-bind:href="`/posts/${post.id}`" class="btn btn-primary">More Info</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div v-for="post in posts" :key="post.id">
      <p>{{ post.title }}</p>
      <router-link v-bind:to="`/posts/${post.id}`">
        <img v-bind:src="post.image" alt="" />
      </router-link>
    </div>
  </div> -->
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
