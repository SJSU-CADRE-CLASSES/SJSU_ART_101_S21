var attractors = [];
var bees = [];

function setup() {

  createCanvas(windowWidth, windowHeight);


  for (var i = 0; i < 100; i++) {
    bees.push(new Bee(random(width), random(height)));

  }
  // for (var i = 0; i < 10; i++) {
  // attractors.push(createVector(random(width), random(height)));

// }
background(51);


}

function mousePressed() {
  attractors.push(createVector(mouseX, mouseY))
}

function draw() {
  background(51);
  stroke(255);
  strokeWeight(4);

  for (var j = 0; j < attractors.length; j++) {
    stroke(0, 255, 0)
  point(attractors[j].x, attractors[j].y);
}
  for (var i = 0; i < bees.length; i++) {
    var bee = bees[i];
    for (var j = 0; j < attractors.length; j++) {
    bee.attracted(attractors[j]);
  }
    bee.update();
    bee.show();
  }
}
