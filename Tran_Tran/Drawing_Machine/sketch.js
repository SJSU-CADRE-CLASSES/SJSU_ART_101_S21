var attractors = [];
var bees = [];

function setup() {

  createCanvas(windowWidth, windowHeight);
  background(10);
  for (var i = 0; i < 50; i++) {
    bees.push(new Bee(random(width), random(height)));

  // for (var i = 0; i < 10; i++) {
  // attractors.push(createVector(random(width), random(height)));

// }



}

}



function mousePressed() {
  attractors.push(createVector(mouseX, mouseY, 10, 10))
}

function draw() {
  // background(51);
  stroke(255);
  strokeWeight(4);

  for (var j = 0; j < attractors.length; j++) {
    stroke(255)
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

function keyTyped(){
if (key === 's'){
  saveCanvas('fileName', 'png');

}else if (key === 'c'){
  clear();
  setup();
}

document.addEventListener('keyup', function(e){
  if(e.keyCode == 13)
    window.location.reload();
})


}
