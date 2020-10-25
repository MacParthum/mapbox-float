mapboxgl.accessToken =
  "pk.eyJ1IjoibWFjcGFydGh1bSIsImEiOiJja2Y0YjA2bGgwYms1MnBuNHU1eXBwcWtiIn0.CHl4KYKsltpTGyUru9eg8A";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
  center: [-82.5, 35.3], // starting position [lng, lat]
  zoom: 9, // starting zoom
});
