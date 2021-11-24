<template>
  <div class="home">
    <h1>{{ message }}</h1>

    <div id="map" style="width: 800px; height: 600px"></div>
  </div>
</template>

<style>
#marker {
  background-image: url("https://docs.mapbox.com/mapbox-gl-js/assets/washington-monument.jpg");
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}

.mapboxgl-popup {
  max-width: 200px;
}
</style>

<script>
import mapboxgl from "mapbox-gl";

export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
    };
  },
  mounted: function () {
    this.generateMap();
  },
  methods: {
    generateMap: function () {
      mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_CODE;
      // const map = new mapboxgl.Map({
      //   container: "map", // container ID
      //   style: "mapbox://styles/mapbox/streets-v11", // style URL
      //   center: [-74.5, 40], // starting position [lng, lat]
      //   zoom: 9, // starting zoom
      // });
      const monument = [-77.0353, 38.8895];
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/light-v10",
        center: monument,
        zoom: 15,
      });

      // create the popup
      const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        "Construction on the Washington Monument began in 1848."
      );

      // create DOM element for the marker
      const el = document.createElement("div");
      el.id = "marker";

      // create the marker
      new mapboxgl.Marker(el)
        .setLngLat(monument)
        .setPopup(popup) // sets a popup on this marker
        .addTo(map);
    },
  },
};
</script>
