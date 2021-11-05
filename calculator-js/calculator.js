console.log("I am in js file!");

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      first: "",
      second: "",
      third: "",
      calculatedSum: "",
    };
  },
  methods: {
    sum: function () {
      this.calculatedSum = parseInt(this.first) + parseInt(this.second) + parseInt(this.third);
      console.log(this.calculatedSum);
    },
  },
});
