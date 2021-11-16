<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <h1>Edit Blog</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Title:</label>
        <input type="text" v-model="editPostParams.title" />
      </div>
      <div>
        <label>Body:</label>
        <input type="text" v-model="editPostParams.body" />
      </div>
      <div>
        <label>Image:</label>
        <input type="text" v-model="editPostParams.image" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      editPostParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .patch("/posts/" + this.$route.params.id, this.editPostParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/posts");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    showFunction: function () {
      console.log("in the show function");
      axios.get(`/posts/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.editPostParams = response.data;
      });
    },
  },
  created: function () {
    this.showFunction();
  },
};
</script>
