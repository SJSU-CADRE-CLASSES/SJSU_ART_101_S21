let array = [];

function setup() {
  createCanvas(640, 480);
  background(230);

  strokeWeight(7);
}

function draw() {
  if (mouseIsPressed) {
    // stroke(map(mouseX, 0, 600, 0, 255, true));
    // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY, );
    line(mouseX, mouseY, pmouseX, pmouseY);
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
    for (var i = 0; i < array.length - 1; i++) {
      line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    }
  }
  return false;
}
