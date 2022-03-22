//-------map code below----------
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

//----------map code above ------------


// //PacMen Factory code below
// var pos = 0;
// const pacArray = [
// ['./images/PacMan1.png', './images/Pacman2.png'],
// ['./images/PacMan3.png', ',/images/PacMan4.png'],
// ];
// var direction = 0;
// const pacMen = [];

// function setToRandom(scale) {
//     return {
//         x: Math.random() * scale,
//         y: Math.random() * scale,
//     };
// }
// //Factory to make a PacMan
// function makePac() {
//     //returns an object with values scaled {x: 33, y: 21}
//     let velocity = setToRandom(10);
//     let positon = setToRandom(200);
//     // Add images to div id = game
//     let game = document.getElementById('game');
//     let newimg = document.createElement('img');
//     newimg.style.postion = 'absolute';
//     newimg.src = './images/PacMan1.png';
//     newimg.width = 100;
//     newimg.style.left = position.x;
//     newimg.style.top = positon.y;
//     game.appendChild(newimg);
//     // new style of creating an object
//     return{
//         position, velocity, newimg
//     };
// }
// function update() {
//     //loop over pacmen array and move each one and move image in DOM
//     pacMen.forEach((item) => {
//         checkCollisions(item);
//         item.position.x += item.velocity.x;
//         item.position.y += item.velocity.y;

//         item.newimg.style.left = item.position.x;
//         item.newimg.style.top = item.velocity.y;
//          });
//          setTimeout(update, 20);
// }
// function checkCollisions(item);{
//     if(
//     item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||
//     item.positon.x + item.velocity.x < 0
//     )
//     item.velocity.x = -item.velocity.x;
//     if(
//         item.position.y + item.velocity.y + item.newimg.height > window.innerHeight ||
//         item.position.y + item.velocity.y < 0
//     )
//     item.velocity.y = -item.velocity.y;
// }
// function makeOne(){
//     pacMen.push(makePac()); //add new PacMan
// }
// //don't change this line
// if (typeof Module !== 'undefined') {
//     module.export = { checkCollisions, update, pacMen };
// }
