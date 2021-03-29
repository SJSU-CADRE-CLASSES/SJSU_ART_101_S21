// flowers I like
let flowers = [{
  name: "rose",
  color: "flower color"
}, {
  name: "hydrangea",
  color: "blue"
}, {
  name: "lily",
  color: "white"
}, {
  name: "hyacinth",
  color: "indigo"
}, {
  name: "lavendar",
  color: "purple"
}];

let randomIndex;

function setup() {
  createCanvas(600, 600);
  background(220);

}

function draw() {

}

function mousePressed() {
  background(random(200, 225));
  randomIndex = int(random(flowers.length));
  text(flowers[randomIndex].name, 50, 50);
  flowers.splice(randomIndex, 1);

}
