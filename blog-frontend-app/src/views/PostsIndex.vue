<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div class="row">
      <button v-on:click="flipSortOrder()">Flip Sort Order</button>
      <button v-on:click="setSortAttribute('id')">Sort by Id</button>
      <button v-on:click="setSortAttribute('title')">Sort by Title</button>
      Search:
      <input type="text" v-model="searchTerm" list="titles" />
      <datalist id="titles">
        <option v-for="post in posts" :key="post.id">{{ post.title }}</option>
      </datalist>

      <!-- <div v-for="user in filterBy(users, 'Jack', 'name')">  -->
      <!-- <ul>
      <li v-for="user in orderBy(users, 'name')">
        {{ user.name }}
      </li> 
    </ul> -->
      <!-- <b>Search:</b>
      <input type="text" v-model="searchTerm" /> -->
      <div
        class="col-sm-4"
        v-for="post in orderBy(filterBy(posts, searchTerm, 'title'), sortAttribute, sortOrder)"
        :key="post.id"
      >
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
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      message: "Welcome to the blog!",
      posts: [],
      searchTerm: "",
      sortOrder: 1,
      sortAttribute: "title",
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
    flipSortOrder: function () {
      this.sortOrder = this.sortOrder * -1;
    },
    setSortAttribute: function (attribute) {
      this.sortAttribute = attribute;
    },
  },
};
</script>
