let mic;
let micLevel;
let wingAngle = 30; //for the bird
let bamYes = false; //for mousePress
let musicNotes = []; //music notes class
let smoke = []; //smoke class

function setup() {
  createCanvas(400, 420);
  angleMode(DEGREES);

  //make the whole note expand as you speak
  mic = new p5.AudioIn();
  mic.start();
  frameRate(10);

  //make the music notes fall
  for (let i = 0; i <= 10; i++) {
    musicNotes[i] = new MusicNotes(random(0, width), height * 0.3 * i + 150, random(360), random(1, 3));
    console.log(musicNotes[i]);
  }

  //make the smoke float
  for (let j = 0; j <= 6; j++) {
    smoke[j] = new Smoke(random(width), random(0, height * j), random(1, 2));
    console.log(smoke[j]);
  }
}

function draw() {

  micLevel = mic.getLevel();
  background(255);

  //happy avatar for clean environment
  if (bamYes == false) {
    drawSkies();
    drawTreeGreen();
    drawGoGreen(); //text
    drawSun();

    //draw eyelashes for the sun
    for (i = 0; i <= 4; i++) {
      drawEyelashes(30 * (i + 1));
    }

    drawMoon();

    //make sun pupil roll with the mouse
    push();
    translate(map(mouseX, 0, width, width * -0.0275, width * 0.0275), map(mouseY, 0, height, height * -0.0375, height * 0.0175));
    drawPupil(width * 0.3, width * 0.375);
    pop();

    //make moon pupil to roll with the mouse
    push();
    translate(map(mouseX, 0, width, width * -0.01, width * 0.01), map(mouseY, 0, height, -height * 0.05, -height * 0.03));
    drawPupil(width * 0.7, width * 0.375);
    pop();

    //make music notes fall
    for (i = 0; i < musicNotes.length; i++) {
      musicNotes[i].display();
      musicNotes[i].move();
    }

    //make the wholeNote mouth shout
    push();
    s = map(micLevel, 0, 1, 0.75, 4);
    drawWholeNote(s);
    pop();

    //draw green leaves on both sides
    for (let x = 20; x <= 80; x += 25) {
      for (let y = 100; y <= 400; y += 70) {
        drawLeafGreen(x, y);
      }
    }
    for (let x = 330; x <= 390; x += 25) {
      for (let y = 100; y <= 400; y += 70) {
        drawLeafGreen(x, y);
      }
    }

    // draw bird head and wings
    push();
    drawRightWing(wingAngle);
    drawLeftWing(-wingAngle);
    drawBirdHead();
    pop();
  }

  //sad avatar for polluted environment
  if (bamYes == true) {

    drawSkiesGray();
    drawTreeBrown();
    drawHurtEyes();
    drawSadMouth();

    //withering brown leaves
    for (let x = 20; x <= 80; x += 25) {
      for (let y = 100; y <= 400; y += 70) {
        drawLeafBrown(x, y);
      }
    }
    for (let x = 330; x <= 390; x += 25) {
      for (let y = 100; y <= 400; y += 70) {
        drawLeafBrown(x, y);
      }
    }
    //smoke
    for (j = 0; j < smoke.length; j++) {
      smoke[j].display();
      smoke[j].move();
    }
  }
}

//change scene from happy and clean to polluted
function mousePressed() {
  bamYes = !bamYes;
}

//for happy and clean background

//blue and green skies
function drawSkies() {
  //green day background on left
  fill(150, 220, 45);
  noStroke();
  rect(0, 0, width * 0.5, height);

  //night background on right
  fill(0, 50, 120);
  noStroke();
  rect(width * 0.5, 0, width * 0.5, height);
}

function drawTreeGreen() {
  //trunk
  fill(150, 100, 0);
  noStroke();
  quad(width * 0.45, height * 0.6, width * 0.48, height * 0.1, width * 0.52, height * 0.1, width * 0.55, height * 0.6);
  //canopy
  fill(0, 180, 0);
  noStroke();
  rect(0, 0, width, height*0.2);
}

function drawGoGreen() {
  //Go Green text
  textSize(48);
  fill(0, 100, 0);
  noStroke();
  text("Go Green", width * 0.25, height * 0.15);
}

function drawSun() {
  //sun as eye
  fill(248, 150, 50);
  stroke(255, 204, 100);
  strokeWeight(6)
  circle(width * 0.3, width * 0.35, width * 0.15);
}

function drawEyelashes(ang) {
  //eyelashes on the Sun
  push();
  translate(width * 0.3, width * 0.35);
  stroke(255, 140, 100);
  strokeWeight(3);
  line(0.08 * width * cos(ang), -0.08 * width * sin(ang), 0.08 * width * cos(ang), -0.08 * width * sin(ang) - 0.04 * width);
  pop();
}

function drawMoon() {
  //moon as eye
  push();
  fill(255, 240, 200)
  noStroke();
  translate(width * 0.7, height * 0.325);
  //rotate(angleMoon);
  beginShape();
  //yellow moon
  vertex(-width * 0.1, height * 0.0625);
  bezierVertex(-width * 0.075, height * 0.025, 0, -height * 0.1365, width * 0.1, height * 0.0625);
  bezierVertex(width * 0.05, height * 0.0325, 0, width * 0.0125, -width * 0.0625, height * 0.0375);
  endShape(CLOSE);
  pop();
}

//for both sun and moon (already translated in draw function)
function drawPupil(x, y) {
  fill(0);
  noStroke();
  circle(x, y, width * 0.0375);
}

function drawWholeNote(s) {
  //whole note as mouth in happy background
  translate(width * 0.5, height * 0.82);
  noStroke();
  scale(s);
  //outer black ellipse
  fill(0);
  rotate(-12);
  ellipseMode(CENTER);
  ellipse(0, 0, width * 0.25, width * 0.15);
  //inner white circle
  fill(255);
  ellipseMode(CENTER);
  circle(0, 0, width * 0.12);
}

function drawLeafGreen(x, y) {
  push();
  translate(x, y);
  //green leaves
  fill(0, 200, 9);
  noStroke();
  beginShape();
  curveVertex(0, height * 0.05);
  curveVertex(0, height * 0.05);
  curveVertex(-width * 0.03, -height * 0.05);
  curveVertex(0, -height * 0.1);
  curveVertex(width * 0.03, -height * 0.05);
  endShape(CLOSE);

  //leaf lines
  stroke(200, 100, 50);
  strokeWeight(1);
  line(0, -height * 0.1, 0, height * 0.04);
  line(0, -height * 0.09, -width * 0.03, -height * 0.04);
  line(0, -height * 0.09, width * 0.03, -height * 0.04);
  line(0, -height * 0.07, -width * 0.025, -height * 0.02);
  line(0, -height * 0.07, width * 0.025, -height * 0.02);
  line(0, -height * 0.05, -width * 0.02, 0);
  line(0, -height * 0.05, width * 0.02, 0);
  line(0, -height * 0.02, -width * 0.013, height * 0.02);
  line(0, -height * 0.02, width * 0.013, height * 0.02);
  pop();
}

function drawRightWing(wingAngle) {
  //left wing on birdNose
  push();
  translate(width * 0.42, height * 0.56);
  rotate(map(mouseX, 0, width, 0, wingAngle)
);
  fill(215, random(0, 128), random(0, 50));
  noStroke();
  arc(0, 0, width * 0.15, height * 0.15, 0, 180);
  pop();
}

function drawLeftWing(wingAngle) {
  //right wing on bird—nose
  push();
  translate(width * 0.58, height * 0.56);
  rotate(map(mouseX, 0, width, 0, wingAngle)
);
  fill(215, random(0, 128), random(0, 50));
  noStroke();
  arc(0, 0, width * 0.15, height * 0.15, 0, 180);
  pop();
}

function drawBirdHead() {
  //circle for bird's head
  fill(255, 65, 0);
  noStroke();
  circle(width * 0.5, height * 0.6, width * 0.16);
  //triangle crest
  fill(220, 45, 0);
  noStroke();
  triangle(width * 0.47, height * 0.57, width * 0.53, height * 0.57, width * 0.5, height * 0.52);

  //points for bird eyes

  //white retinas
  stroke(255);
  strokeWeight(8);
  point(width * 0.475, height * 0.6);
  point(width * 0.525, height * 0.6);
  //black pupils
  stroke(0);
  strokeWeight(5);
  point(width * 0.475, height * 0.6);
  point(width * 0.525, height * 0.6);

  //triangle for beak
  fill(20, 0, 0);
  noStroke();
  triangle(width * 0.485, height * 0.625, width * 0.515, height * 0.625, width * 0.5, height * 0.65);
}

//for polluted background

//gray sky
function drawSkiesGray() {
  //green day background on left
  fill(150);
  noStroke();
  rect(0, 0, width, height);
}

function drawTreeBrown() {
  //trunk
  fill(150, 130, 100);
  noStroke();
  quad(width * 0.45, height * 0.6, width * 0.48, height * 0.1, width * 0.52, height * 0.1, width * 0.55, height * 0.6);
  //canopy
  fill(140, 130, 110);
  noStroke();
  rect(0, 0, width, height*0.2);
}

function drawHurtEyes() {
  //circles represent hurt done by pollution
  noStroke();
  //eyelids
  fill(255);
  circle(width * 0.3, height * 0.35, width * 0.1);
  circle(width * 0.7, height * 0.35, width * 0.1);
  //pupils
  fill(0);
  circle(width * 0.3, height * 0.34, width * 0.05);
  circle(width * 0.7, height * 0.34, width * 0.05);
}

function drawSadMouth() {
  //dark red frowning lips for polluted bkg
  noFill();
  stroke(100, 0, 0);
  strokeWeight(10);
  arc(width * 0.5, height * 0.85, width * 0.4, height * 0.2, 180, 360);
}

function drawLeafBrown(x, y) {
  push();
  translate(x, y);
  //withering brown leaves
  fill(140, 130, 110);
  noStroke();
  beginShape();
  curveVertex(0, height * 0.05);
  curveVertex(0, height * 0.05);
  curveVertex(-width * 0.03, -height * 0.05);
  curveVertex(0, -height * 0.1);
  curveVertex(width * 0.03, -height * 0.05);
  endShape(CLOSE);

  //leaf lines
  stroke(100);
  strokeWeight(1);
  line(0, -height * 0.1, 0, height * 0.04);
  line(0, -height * 0.09, -width * 0.03, -height * 0.04);
  line(0, -height * 0.09, width * 0.03, -height * 0.04);
  line(0, -height * 0.07, -width * 0.025, -height * 0.02);
  line(0, -height * 0.07, width * 0.025, -height * 0.02);
  line(0, -height * 0.05, -width * 0.02, 0);
  line(0, -height * 0.05, width * 0.02, 0);
  line(0, -height * 0.02, -width * 0.013, height * 0.02);
  line(0, -height * 0.02, width * 0.013, height * 0.02);
  pop();
}