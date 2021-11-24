<template>
  <div class="home">
    <h1>{{ message }}</h1>

    <div id="map" style="width: 800px; height: 600px"></div>
  </div>
</template>

<style>
/* #marker {
  background-image: url("https://docs.mapbox.com/mapbox-gl-js/assets/washington-monument.jpg");
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}

.mapboxgl-popup {
  max-width: 200px;
} */
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

      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/light-v10",
        center: [-87.62712, 41.89033],
        zoom: 15.5,
        pitch: 45,
      });

      function rotateCamera(timestamp) {
        // clamp the rotation between 0 -360 degrees
        // Divide timestamp by 100 to slow rotation to ~10 degrees / sec
        map.rotateTo((timestamp / 100) % 360, { duration: 0 });
        // Request the next frame of the animation.
        requestAnimationFrame(rotateCamera);
      }

      map.on("load", () => {
        // Start the animation.
        rotateCamera(0);

        // Add 3d buildings and remove label layers to enhance the map
        const layers = map.getStyle().layers;
        for (const layer of layers) {
          if (layer.type === "symbol" && layer.layout["text-field"]) {
            // remove text labels
            map.removeLayer(layer.id);
          }
        }

        map.addLayer({
          id: "3d-buildings",
          source: "composite",
          "source-layer": "building",
          filter: ["==", "extrude", "true"],
          type: "fill-extrusion",
          minzoom: 15,
          paint: {
            "fill-extrusion-color": "#aaa",

            // use an 'interpolate' expression to add a smooth transition effect to the
            // buildings as the user zooms in
            "fill-extrusion-height": ["interpolate", ["linear"], ["zoom"], 15, 0, 15.05, ["get", "height"]],
            "fill-extrusion-base": ["interpolate", ["linear"], ["zoom"], 15, 0, 15.05, ["get", "min_height"]],
            "fill-extrusion-opacity": 0.6,
          },
        });
      });

      // const map = new mapboxgl.Map({
      //   container: "map", // container ID
      //   style: "mapbox://styles/mapbox/streets-v11", // style URL
      //   center: [-74.5, 40], // starting position [lng, lat]
      //   zoom: 9, // starting zoom
      // });
      // const monument = [-77.0353, 38.8895];
      // const map = new mapboxgl.Map({
      //   container: "map",
      //   style: "mapbox://styles/mapbox/light-v10",
      //   center: monument,
      //   zoom: 15,
      // });

      // // create the popup
      // const popup = new mapboxgl.Popup({ offset: 25 }).setText(
      //   "Construction on the Washington Monument began in 1848."
      // );

      // // create DOM element for the marker
      // const el = document.createElement("div");
      // el.id = "marker";

      // // create the marker
      // new mapboxgl.Marker(el)
      //   .setLngLat(monument)
      //   .setPopup(popup) // sets a popup on this marker
      //   .addTo(map);
      // const marker1 = new mapboxgl.Marker().setLngLat([38.8893, 77.0502]).addTo(map);

      // // Create a default Marker, colored black, rotated 45 degrees.
      // const marker2 = new mapboxgl.Marker({ color: "black", rotation: 45 }).setLngLat([38.8875, 77.0364]).addTo(map);
    },
  },
};
</script>
