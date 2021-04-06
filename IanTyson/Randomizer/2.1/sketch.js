
let planets = [{
  name: "Suul",
  color: "Red"
}, {
  name: "Mevy",
  color: "Brown"
}, {
  name: "Veis",
  color: "Neon Green"
}, {
  name: "X-02",
  color: "Silver"
}, {
  name: "Jurt",
  color: "Blue"
}];

let randomIndex;

function setup() {
  createCanvas(600, 600);
  background(220);

}

function draw() {

}

function mousePressed() {
  background(220);
  randomIndex = int(random(planets.length));
  text(planets[randomIndex].name, 50, 50);
  planets.splice(randomIndex, 1);
}
