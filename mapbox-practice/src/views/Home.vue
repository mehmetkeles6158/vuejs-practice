<template>
  <div class="home">
    <div id="map" style="width: 800px; height: 600px"></div>
    <h1>{{ message }}</h1>
  </div>
</template>

<style></style>

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
      const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9, // starting zoom
      });
    },
  },
};
</script>
