/* global Vue, axios */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      products: [],
    };
  },
  methods: {
    allProducts: function () {
      console.log("Loading Products");
      axios.get("http://localhost:3000/products").then((response) => {
        console.log(response.data);
        this.products = response.data;
      });
    },
    createProduct: function () {
      console.log("creating product...");
      // make post request
      axios
        .post("http://localhost:3000/products", {
          name: "IZZE",
          description: "it is nice drink",
          price: 2.99,
          image_url:
            "https://cdn.shopify.com/s/files/1/0021/5436/4983/files/izze-home-about3-picnicTub-933x700_600x.jpg?v=1535478579",
        })
        .then((response) => {
          console.log(response.data);
          this.products.push(response.data);
        });
    },
  },
});
