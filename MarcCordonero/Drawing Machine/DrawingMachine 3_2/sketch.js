let array = [];
let noiseOffset = 0.0;
let strokeWidth = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
background(235);

  noFill();

}

function draw() {


 if (mouseIsPressed) {
    //line(mouseX, mouseY, pmouseX, pmouseY)
      background(50, 125, 225, 80);
      strokeWeight(strokeWidth);

      noiseOffset += 0.1;
      strokeWidth = noise(noiseOffset) * 25;
      stroke(map(mouseX, 0, 600, 0, 0, true));
          line(mouseX, mouseY, pmouseX, pmouseY)
    array.push([mouseX, mouseY]);
  }

}

function keyTyped() {

  if (key === 's') {
    // save image
    saveCanvas('fileName', 'png')
  } else if (key === 'd') {
    //display image
background(235);
beginShape();
    for (let i = 0; i < array.length; i++) {
    //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    curveVertex(array[i][0], array[i][1])
    }

endShape();


  }

 else if (key === 'c') {
   //clear image
   clear();
 }
}
