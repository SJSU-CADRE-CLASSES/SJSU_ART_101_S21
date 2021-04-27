let array = [];

function setup() {
  createCanvas(640, 480);
  background(230);

  strokeWeight(7);
  noFill();
}

function draw() {
  if (mouseIsPressed) {
    // stroke(map(mouseX, 0, 600, 0, 255, true));
    // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY, );
    // line(mouseX, mouseY, pmouseX, pmouseY);
    background(55);
    array.push([mouseX, mouseY]);

  }
}

function keyTyped() {
  //Save canvas to file name
  if (key === 's') {
    //save current drawing
    saveCanvas('drawSomething', 'png');

  } else if (key === 'd') {
    //display image
    background(220);
    beginShape();
    for (var i = 0; i < array.length - 1; i++) {
      line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      // curveVertex(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      // curveVertex(array[i][0], array[i][1]);
    }
  }
  return false;
}
