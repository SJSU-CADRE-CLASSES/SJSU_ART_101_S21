let array = [];
let backgroundColor = 200;
let noiseOffset = 0.0;
let strokeVal = 5;

function setup() {
  createCanvas(windowWidth, windowHeight)
  //background(backgroundColor);
  background(220, 50, 133);

  noFill();
}

function draw() {
  background(220, 50, 133, 20);
  strokeWeight(strokeVal);

  noiseOffset += 0.01;
  strokeVal = noise(noiseOffset) * 30;


  stroke(map(mouseX, 0, 600, 0, 255, true))
  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  line(mouseX, mouseY, pmouseX, pmouseY);



  //if (mouseIsPressed) {
  //  backgroundColor -= 2;
  //  background(backgroundColor);
  //  beginShape();
  //  for (let i = 0; i < array.length; i++) {
  //      curveVertex(array[i][0], array[i][1]);
  //   }
  //  endShape();
  //    array.push([mouseX, mouseY]);
  //}
}

function keyTyped() {
  console.log(`key ${key} is being typed`)
  if (key == "s") {
    saveCanvas('fileName', 'png')
  } else if (key == 'c') {
    clear();
  }
  // } else if (key == "d") {
  //   background(255);
  //   beginShape();
  //   for (let i = 0; i < array.length; i++) {
  //     //line(array[i][0], array[i][1], array[i+1][0], array[i+1][1])
  //     curveVertex(array[i][0], array[i][1]);
  //   }
  //   endShape();
  // }
  return false;
}

function mousePressed() {
  console.log("mouse pressed function");
  array = [];
  backgroundColor = 255;
}
