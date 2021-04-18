let array = [];
let backgroundColor = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(backgroundColor);

  strokeWeight(7);
  noFill();
}

function draw() {
  if (mouseIsPressed) {
    // stroke(map(mouseX, 0, 600, 0, 255, true));
    // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY, );
    // line(mouseX, mouseY, pmouseX, pmouseY);
    backgroundColor -= 7;
    background(backgroundColor);
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
    for (var i = 0; i < array.length; i++) {
      // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1]);
    }
    endShape();
  }
  return false;
}
