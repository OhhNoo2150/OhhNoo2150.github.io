var token = config.MapboxAPIToken;
const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-66.4069444,18.3277778],
    zoom: 10
});
var marker = new mapboxgl.Marker()
    .setLngLat([-66.4069444,18.3277778])
    .addTo(map);
