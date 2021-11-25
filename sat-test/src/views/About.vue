<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div>
      <label>School DBN:</label>
      <input type="text" v-model="newScoreParams.dbn" />
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "SAT SCORES!",
      scores: {},
      // searchTerm: "",
    };
  },
  created: function () {
    this.scoresIndex();
  },
  methods: {
    scoresIndex: function () {
      axios.get("https://data.cityofnewyork.us/resource/f9bf-2cp4.json", this.newScoreParams).then((response) => {
        console.log(response.data);
        this.scores = response.data;
      });
    },
  },
};
</script>
