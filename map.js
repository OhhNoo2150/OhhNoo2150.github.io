mapboxgl.accessToken ='pk.eyJ1Ijoib2hobm9vMjE1MCIsImEiOiJjbDB3cmR1cmgwMHU4M2twbGo0eWIyemtqIn0.LdUr9RetUS0jGvo8CoCvMw';

const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-66.4069444,18.3277778],
    zoom: 10
});
var marker = new mapboxgl.Marker()
    .setLngLat([-66.4069444,18.3277778])
    .addTo(map);

    var worldMarkers = []