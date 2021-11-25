<template>
  <div class="home">
    <!-- Search:
    <input type="text" v-model="searchTerm" list="scores" />
    <datalist id="scores">
      <option v-for="score in scores" :key="score.id">{{ score.school_name }}</option>
    </datalist> -->
    <h1>{{ message }}</h1>
    <div v-for="score in scores">
      <div>
        School DBN:
        <input v-model="score.dbn" type="text" />
      </div>
      <p>
        {{ score.school_name }},
        <b>reading:</b>
        {{ score.sat_critical_reading_avg_score }},
        <b>math:</b>
        {{ score.sat_math_avg_score }}
      </p>
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
      scores: [],
      // searchTerm: "",
    };
  },
  created: function () {
    this.scoresIndex();
  },
  methods: {
    scoresIndex: function () {
      axios.get("https://data.cityofnewyork.us/resource/f9bf-2cp4.json").then((response) => {
        console.log(response.data);
        this.scores = response.data;
      });
    },
  },
};
</script>
