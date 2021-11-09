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
          name: "Izze clementine",
          description: "It is the best drink",
          price: 1.99,
          image_url:
            "https://d2d8wwwkmhfcva.cloudfront.net/466x466/filters:fill(FFF,true):format(webp)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_ecc0739a-9620-4de4-9e0c-9ce7a988bf3e.png",
        })
        .then((response) => {
          console.log(response.data);
          this.products.push(response.data);
        });
    },
    updateProduct: function () {
      console.log("updating product...");
      // make update request
      axios
        .patch("http://localhost:3000/products/8", {
          name: "IZZE-APPLE",
          price: 3.99,
        })
        .then((response) => {
          console.log(response.data);
        });
    },
    deleteProduct: function () {
      console.log("Deleting product...");
      // make delete request
      axios.delete("http://localhost:3000/products/8").then((response) => {
        console.log(response);
      });
    },
  },
});
