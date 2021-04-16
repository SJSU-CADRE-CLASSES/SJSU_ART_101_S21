// flowers I like
let flowers = [{
  name: "rose",
  color: "red"
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
let animating = false;

function setup() {
  createCanvas(600, 600);
  background(220);
  textSize(32);

  text("click to randomize", 50, 50)

}

function draw() {

  if (animating == true){
    ellipse(random(width), random(height), random(50, 200))
  }
}

function randomizer(){
  animating = false;
  if (flowers[0]){
    // this displays random name and splices it out of array
    background(random(200, 225));
    randomIndex = int(random(flowers.length));
    text(`${flowers[randomIndex].name} 's favorite color is
     ${flowers[randomIndex].color}`, 50, 50);
    flowers.splice(randomIndex, 1);
  } else {
    background(random(200, 225));
    text("nothing left!", 50, 50)
  }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);

}
