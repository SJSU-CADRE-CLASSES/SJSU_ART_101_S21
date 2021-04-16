//images of animals
let array = [];
let endangered = [];
let button;
let randomIndex;
let animating = false;
let img;
let imageCounter = 0;
let final = false;
let strokeWidth = 0;
let noiseOffset = 0;

function preload() {
  for (let i = 0; i <= 10; i++) {
    endangered[i] = loadImage(`pictures/endangered_${i}.jpg`);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight*0.85);
  background(80, 180, 80);
  strokeWeight(3);
  noFill();

  push();
  textSize(48);
  textStyle(BOLD);
  fill(100, 0, 0);
  text("Repopulate endangered animals!", 0.25*width, 0.5*height);
  pop();

  imageMode(CENTER);
  frameRate(12);

  //click the button
  button = createButton("Click to see");
  //button = select("#randButton");
  button.mousePressed(buttonPressed);
  button.class("randomizerButton");
}

function draw() {
  if (animating == true && endangered.length > 0) {
    clear();
    background(80, 180, 80);
    //images of endangered species
    imageCounter %= endangered.length;
    image(endangered[imageCounter], width / 2, height / 2);
    if (imageCounter < endangered.length - 1) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }
  }

  if (mouseIsPressed) {

    strokeWeight(strokeWidth);
    noiseOffset += 0.15;
    strokeWidth = noise(noiseOffset)*15;

    stroke(map(mouseY, 0, windowHeight, 0, 255, true));

    array.push([mouseX, mouseY]);
    drawAnimal();
  }
  console.log(`final is ${final}`);
  if (final == true) {
    background(80, 180, 80);
    textSize(48);
    //black text
    fill(0);
    noStroke();
    textStyle(BOLD);
    text("Protect the animals.", width * 0.3, height * 0.6);
  }
}

function randomizer() {
  animating = false;
  if (endangered[0]) {
    clear();
    //random shades of green background
    background(random(50, 150), 180, random(50, 150));

    randomIndexEndangered = int(random(endangered.length));
    image(endangered[randomIndexEndangered], width * 0.5, height * 0.5);

    endangered.splice([randomIndexEndangered], 1);

  } else {
    final = true
    background(80, 180, 80);
    textSize(48);
    fill(0);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 1000);
}

function keyTyped() {
  if (key === 's') { //save image
    saveCanvas('drawing', 'png');
  }
}

function drawAnimal() {
  beginShape(); //draw image in curvilinear lines
  //lines with different shades of blue
  stroke(random(115, 240), random(115, 240), 255);

  for (let i = 0; i < array.length; i++) {
    curveVertex(array[i][0], array[i][1]);
  }
  endShape();

  //draw the same image at a smaller scale
  push();
  translate(0.35 * width, 0.3 * height);
  beginShape();
  //lines with different shades of red
  stroke(255, random(115, 240), random(115, 240));
  scale(0.75);
  for (let i = 0; i < array.length; i++) {
    curveVertex(array[i][0], array[i][1]);
  }

  endShape();
  pop();

  //draw another image at a smaller scale
  push();
  translate(0.6 * width, 0.35 * height);
  beginShape();
  //lines with different shades of green
  stroke(random(115, 240), 255, random(115, 240));
  scale(0.5);
  for (let i = 0; i < array.length; i++) {
    curveVertex(array[i][0], array[i][1]);
  }

  endShape();
  pop();
}

function mousePressed() {
  array = [];
}
