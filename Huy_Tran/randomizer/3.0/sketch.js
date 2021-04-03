
function setup() {
  createCanvas(640, 480);
  background(230);

  strokeWeight(7);
}

function draw() {
  if (mouseIsPressed) {
    stroke(map(mouseX, 0, 600, 0, 255, true));
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY,);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function keyTyped() {
  //Save canvas to file name
  if (key === 's') {
    saveCanvas('drawSomething', 'png');
    return false;
  }
}
