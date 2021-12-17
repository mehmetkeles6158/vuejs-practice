<template>
  <div class="home">
    <h1>{{ message }}</h1>

    <div v-for="student in students">
      <h2>{{ student }}</h2>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Students' Info",
      students: [],
    };
  },
  created: function () {
    this.studentsIndex();
  },
  methods: {
    studentsIndex: function () {
      axios.get("/students/1").then((response) => {
        console.log(response.data);
        this.students = response.data;
      });
    },
  },
};
</script>
