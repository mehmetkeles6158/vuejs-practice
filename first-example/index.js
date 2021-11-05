// console.log("I am in js file!");

var app = new Vue({
  el: "#app",
  data: {
    message: "Hello, This is Vue.js Framework!",
    name: "Mehmet",
    showInfo: false,
    fruits: ["mango", "cherries", "pineapple", "strawberry"],
  },
  methods: {
    toggleInfo: function () {
      console.log("toggling info");
      console.log(this.showInfo);
      this.showInfo = !this.showInfo;
    },
    addFruit: function () {
      console.log("adding fruit...");
      console.log(this.newFruit);
      this.fruits.push(this.newFruit);
    },
  },
});

var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Hello Vue.js. Write Reverse!",
    team: "BESIKTAS",
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
    reverseMessage2: function () {
      this.team = this.team.split("").reverse().join("");
    },
  },
});

var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Hello Vue!",
  },
});

var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [
      { text: "Learn JavaScript First;" },
      { text: "Learn Vue Second;" },
      { text: "Build something awesome then :)" },
    ],
  },
});

var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "You loaded this page on " + new Date().toLocaleString(),
  },
});

var app7 = new Vue({
  el: "#app-7",
  data: {
    name: "Mehmet",
  },
  methods: {
    clickMessage: function () {
      this.name = "Akif";
    },
  },
});
