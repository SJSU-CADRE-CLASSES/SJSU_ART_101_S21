//Creating variables.
let xCnv;
let cloudColor;
let prevClouds = [];
let backgroundColor = '#5EA1FF';
//Intial setup.
function setup() {
  let cnv = createCanvas(windowWidth - windowWidth * .1, windowHeight - windowHeight * .1);
  let xCnv = (windowWidth - width) / 2;
  cnv.position(xCnv, 0 + windowHeight * .01);
  background(backgroundColor);
}

//Basic cloud drawing function.
function draw() {
  //Timer code.
  textSize(24);
  text(`${round(millis()/1000)} seconds`, width / 36, height / 8);
  if (round(millis() / 1000) >= 13) {
    clear();
    background(0);
  }
  push();
  translate(p5.Vector.fromAngle(millis() / 2000, 80));
  //Sun timer icon code.
  fill(225, 140, 51);
  let sun = circle(100, 100, 40);
  if (round(millis() / 1000) >= 13) {
    clear();
    background(0);
  }
  pop();
  if (mouseIsPressed) {
    //Drawing Clouds.
    if (mouseButton === LEFT) {
      cloudColor = color(map(mouseX, 0, width, 0, 255, true))
      beginShape();
      circle(mouseX, mouseY, random(20, 30));
      circle(mouseX + random(10, 20), mouseY + random(15, 30), random(10, 20));
      circle(mouseX - random(10, 20), mouseY - random(20, 40), random(30, 50));
      circle(mouseX + random(5, 20), mouseY - random(10, 40), random(20, 50));
      circle(mouseX - random(15, 25), mouseY + random(5, 50), random(40, 80));
      noStroke();
      fill(cloudColor);
      endShape(CLOSE);
      prevClouds.push([mouseX, mouseY]);
      //Redrawing an old cloud.
    } else if (mouseButton === CENTER) {
      for (let i = 0; i < prevClouds.length - 1; i++) {
        circle(prevClouds[i][0], prevClouds[i][i + 1], random(10, 50));
        circle(prevClouds[1][i], prevClouds[i][1], random(10, 50));
        translate(mouseX, mouseY);
      }
    }
  }
}

//Saving function.
function keyTyped() {
  if (key === "s") {
    saveCanvas('fileName', 'png')
  } else if (key === "c") {
    background(200);
  }
}
