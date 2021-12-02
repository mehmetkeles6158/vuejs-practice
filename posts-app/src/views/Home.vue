<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <a href="https://github.com/login/oauth/authorize?client_id=5409a9df690da885b99c">Sign into GitHub</a>
    <div v-for="post in posts.articles">
      <h2>{{ post.author }}</h2>
      <p>{{ post.title }}</p>
      <hr />
      <!-- <h2>{{ post.author }}</h2> -->
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      posts: [],
    };
  },
  created: function () {
    this.postsIndex();
    var code = this.$route.query.code;
    if (code) {
      axios.get("/auth/github/callback?code=" + code).then((response) => {
        localStorage.setItem("github_access_token", response.data.access_token);
        this.$router.push("/about");
      });
    }
  },
  methods: {
    postsIndex: function () {
      console.log("posts are loading");
      // axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      //   console.log(response.data);
      //   this.posts = response.data;
      // });
      axios.get("/headlines").then((response) => {
        console.log(response.data);
        this.posts = response.data;
      });
    },
  },
};
</script>
