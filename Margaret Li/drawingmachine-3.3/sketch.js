//images of animals
let array = [];
let endangered = [];

//butterfly drawings in the beginning
let butterflies = [];
let turtles = [];

let button;
let randomIndex;
let animating = false;
let img;
let imageCounter = 0;

let firstTime = true;
let final = false;

let strokeWidth = 0;
let noiseOffset = 0;

let textArray;
let newYork;
let currentEndangered;

function preload() {
  for (let i = 0; i <= 10; i++) {
    endangered[i] = loadImage(`pictures/endangered_${i}.jpg`);
  }

  //upload newYork font
  newYork = loadFont('font/NewYork.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight * 0.85);
  pixelDensity(1);
  drawPixels();
  strokeWeight(3);
  noFill();
  imageMode(CENTER);
  frameRate(12);

  textFont(newYork);
  textSize(40);

  //click the button
  button = createButton("Click to see");
  //button = select("#randButton");
  button.mousePressed(buttonPressed);
  button.class("randomizerButton");

  //create 12 butterflies at random locations
  for (let i = 0; i < 11; i++) {
    butterflies[i] = new Butterflies(random(0, windowWidth), random(0, windowHeight));
  }

  //create 6 turtles at random locations
  for (let i=0; i<=5; i++){
    turtles[i] = new Turtles (random(0, windowWidth),random(0, windowHeight));
  }

}

function draw() {
  if (firstTime) {
    drawPixels();

    for (i = 0; i < butterflies.length; i++) {
      butterflies[i].display();
      butterflies[i].move();
    }

    //stylize the text
    fill(50, 0, 40);
    noStroke();
    textArray = newYork.textToPoints('Repopulate endangered animals!', width * 0.15, height * 0.4, 78, {
      sampleFactor: 0.3
    });

    for (let i = 0; i < textArray.length; i++) {
      ellipse(textArray[i].x, textArray[i].y, 2, 2);
    }

    fill(0);
    noStroke();
    textSize(24);
    text("Drag to trace. Hit 's' to save. Hit 'c' to redraw.", 0.15 * width, 0.6 * height);
  }

  if (animating == true && endangered.length > 0) {
    clear();
    drawPixels();  //multicolored background

    //upload images of endangered species
    imageCounter +=1
    imageCounter %= endangered.length;
    image(endangered[imageCounter], width / 2, height / 2);
  }

  if (mouseIsPressed) {
    firstTime = false;

    strokeWeight(strokeWidth);
    noiseOffset += 0.15;
    strokeWidth = noise(noiseOffset) * 15;

    stroke(map(mouseY, 0, windowHeight, 0, 255, true));

    array.push([mouseX, mouseY]);
    drawAnimal();
  }

  if (final) {    //last frame
    drawPixels();

    for (i = 0; i < turtles.length; i++) {
      turtles[i].display();
      turtles[i].move();
    }

    fill(0, 0, 150);
    noStroke();
    textArray = newYork.textToPoints('Protect endangered animals!', width * 0.15, height * 0.4, 78, {
      sampleFactor: 0.3
    });

    for (let i = 0; i < textArray.length; i++) {
      ellipse(textArray[i].x, textArray[i].y, 2, 2);
    }
  }
}

function randomizer() {   //randomize preloaded images
  animating = false;
  if (endangered[0]) {
    clear();
    drawPixels();

    randomIndexEndangered = int(random(endangered.length));
    currentEndangered = endangered[randomIndexEndangered];
    image(endangered[randomIndexEndangered], width * 0.5, height * 0.5);

    endangered.splice([randomIndexEndangered], 1);

  } else {
    final = true
    drawPixels();
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 1000);
}

function keyTyped() {
  if (key === 's') { //save image
    saveCanvas('drawing', 'png');
  } else if (key==='c'){
    clear();
    array = [];
    drawPixels();
    image(currentEndangered, width / 2, height / 2);
  }

}

function drawAnimal() {
  beginShape(); //draw image in curvilinear lines
  //lines with different shades of blue
  noFill();
  stroke(random(0, 20), random(70, 120), 255);

  for (let i = 0; i < array.length; i++) {
    curveVertex(array[i][0], array[i][1]);
  }
  endShape();

  //draw the same image at a smaller scale
  push();
  translate(0.35 * width, 0.3 * height);
  beginShape();
  //lines with different shades of red
  stroke(255, random(90, 140), random(90, 140));
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
  stroke(random(40, 90), 170, random(40, 90));
  scale(0.5);
  for (let i = 0; i < array.length; i++) {
    curveVertex(array[i][0], array[i][1]);
  }

  endShape();
  pop();

  //draw another image at a smaller scale
  push();
  translate(-0.2 * width, 0.15 * height);
  beginShape();
  //lines with different shades of green
  stroke(170, 100, random(0, 50));
  scale(0.85);
  for (let i = 0; i < array.length; i++) {
    curveVertex(array[i][0], array[i][1]);
  }

  endShape();
  pop();
}

function mousePressed() {
  array = [];
}

function drawPixels() {
  //draw background with pixels
  loadPixels();
  for (let j = 0; j < height; j++) {
    for (let i = 0; i < width; i++) {
      let index = (i + j * width) * 4;
      pixels[index + 0] = i / 4;
      pixels[index + 1] = j / 2;
      pixels[index + 2] = i / 2;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
}
