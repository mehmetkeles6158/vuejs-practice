/* eslint-disable no-undef */
console.log("I am in js file!");

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello Vue.js",
      todos: [],
    };
  },
  methods: {
    loadTodos: function () {
      console.log("Loading Todos");
      axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
        console.log(response.data);
        this.todos = response.data;
      });
    },
  },
  created: function () {
    this.loadTodos();
  },
});

// new Vue({
//   el: "#app1",
//   data() {
//     return {
//       info: null,
//     };
//   },
//   mounted() {
//     axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => (this.info = response.data));
//   },
// });
