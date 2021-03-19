//cake flavors
let cake = [{
  name: "vanilla", 
  frosting: "chocolate"
}, {
  name: "confetti", 
  frosting: "nutella"
}, {
    name: "carrot", 
  frosting: "cream cheese"
}, {
    name: "lemon", 
  frosting: "vanilla"
}, {
  name: "chocolate", 
  frosting: "peanut butter"
}, {
  name: "red velvet", 
  frosting: "oreo"
}];

let randomIndex;

function setup() {
  createCanvas(600, 600);
  background(200);
  

}

function draw() {

}

function mousePressed() {
  background(random(200, 255));
  randomIndex = int(random(cake.length));
  text(cake[randomIndex].name, 50, 50);
  cake.splice(randomIndex, 1);
}