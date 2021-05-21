'use strict';

let state = 'title';
let cnv;
let points = 0;

let w = 600;
let h = 600;

// createCanvas(windowWidth, windowHeight * 0.85);

let trash = [];
let flowers = [];
let player;

let playerImg;
let trashImg;

//spritesheets and animations
let playerSS;
let trashSS;
let playerJSON;
let trashJSON;
let playerAnimation = [];
let trashAnimation = [];

//Earth Day everyday gif (null by default)
let earthDayImage = null;

// let frameRate=24;

let yoff = 0.0; // 2nd dimension of perlin noise

var song;

function preload() {
  //spritesheets
  playerSS = loadImage('assets/collector.png');
  playerJSON = loadJSON('assets/collector.json');
  trashSS = loadImage('assets/bottle.png');
  trashJSON = loadJSON('assets/bottle.json');
  drawPreload();

  //animal crossing song
  song = loadSound('animalcrossing.mp3');
}

function playSong() {
  if (song.isPlaying()){
    //play animal crossing song for entire game
    song.stop();
    song.setVolume(1);
  }
  else {
    song.play();
  }
}

function setup() {
  var url = 'https://api.giphy.com/v1/gifs/search?&api_key=nqDlsVpOUw2qbCA0kd9jn43RdX07aU7Q&q=environment';
  loadJSON(url, gotData);

  w=windowWidth;
  h=windowHeight*0.85
  cnv = createCanvas(w, h);
  textFont('monospace');

  //button
  button=createButton("Music on/off");
  button.mousePressed(playSong);
  button.class("randomizerButton");

  //frames for player sprite
  let playerFrames = playerJSON.frames;

  for (let i = 0; i < playerFrames.length; i++) {
    let pos = playerFrames[i].frame;
    let img = playerSS.get(pos.x, pos.y, pos.w, pos.h);
    playerAnimation.push(img);
  }

  //frames for trash sprite
  let trashFrames = trashJSON.frames;

  for (let i = 0; i < trashFrames.length; i++) {
    let pos = trashFrames[i].frame;
    let img = trashSS.get(pos.x, pos.y, pos.w, pos.h);
    trashAnimation.push(img);
  }

  player = new Player();
  // player.display();

  trash.push(new Trash());

  for (let i=0; i<10; i++){
    flowers.push(new Flower());
  }

  tree_setup();

  pixelDensity(1);
}

function gotData(giphy) {
  //for displaying multiple copies of the chosen giphy image
  earthDayImage = loadImage(giphy.data[3].images.original.url);
}

function draw() {
  switch (state) {
    case 'title':
      drawWelcomePage();
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;

    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
      break;

    case 'you win':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;

    case 'draw':
      drawDraw();
      break;

    default:
      break;
  }
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    player.direction = 'left';
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right';
  } else if (keyCode == UP_ARROW) {
    player.direction = 'up';
  } else if (keyCode == DOWN_ARROW) {
    player.direction = 'down';
  } else if (key = ' ') {
    player.direction = 'still';
  }
}

function title() {
  drawPixels();

  push();
  //Earth Day everyday gif
  if (earthDayImage != null) {
    imageMode(CENTER);
    image(earthDayImage, width / 2, height / 2);
  }

  fill(255);
  textFont('Courier New');
  textStyle(BOLD);
  textSize(36);
  textAlign(CENTER);
  text('Collect the Trash', width*0.5, height * 0.1);
  text('Help repopulate animals', width*0.5, height * 0.95);
  textSize(24);
  fill(255, 0, 0);
  text('Click the screen to start', width*0.5, height*0.85);
  pop();
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

function titleMouseClicked() {
  state = 'level 1';
}

function level1() {
  drawCreek();

  for (let i=0; i<flowers.length; i++){
    flowers[i].display();
  }

  if (random(1) <= 0.01) {
    trash.push(new Trash());
  }

  player.display();
  player.move();

  //iterating through trash array to display and move them
  for (let i = 0; i < trash.length; i++) {
    trash[i].display();
    trash[i].move();
  }

  //check for collision; if there is one, slice that trash out; increase points
  //need to iterate backwards through array
  for (let i = trash.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, trash[i].x, trash[i].y) <= (player.r + trash[i].r) / 2) {
      points++;
      trash.splice(i, 1);
    }
  }

  push();
  textSize(39);
  fill(0);
  noStroke();
  textFont('monospace');
  textAlign(CENTER);
  text(`points:${points}`, width*0.15, height * 0.15);

  if (points >= 5) {
    state = 'you win';
  }
  pop();
}

function drawCreek() {
  //yellow-green background for grass
  background(100, 240, 0);

  noStroke();
  //brown rectangle and curves for creek bank
  fill(206, 154, 113);

  beginShape();
  curveVertex(0, height * 0.8);
  curveVertex(width * 0.2, height * 0.75);
  curveVertex(width * 0.5, height * 0.8);
  curveVertex(width * 0.8, height * 0.75);
  curveVertex(width, height * 0.8);
  endShape(CLOSE);

  rectMode(CENTER);
  rect(width * 0.5, height * 0.9, width, height * 0.2);
  tree_display();

  push();
  //transparent cyan waves for water
  fill(170, 295, 330, 200);
  noStroke();

  //make the waves move
  //draw a polygon with wave points
  beginShape();

  let xoff = 0;

  // Iterate over horizontal pixels
  for (let x = 0; x <= width; x += 5) {
    // Calculate a y value according to noise, map
    //2D Noise
    let y = map(noise(xoff, yoff), 0, 1, height * 0.95, height);
    vertex(x, y);
    // Increment x dimension for noise
    xoff += 0.03;
  }

  // increment y dimension for noise
  yoff += 0.03;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

  pop();
}

function level1MouseClicked() {}

function youWin() {
  frameRate(2);
  push();
  background(150, 230, 70);

  noStroke();
  fill(random(200), random(200), random(200));
  square(random(0, width), random(0, height), random(25, 75));
  fill(random(200), random(200), random(200));
  square(random(0, width), random(0, height), random(25, 75));
  fill(random(200), random(200), random(200));
  square(random(0, width), random(0, height), random(25, 75));

  textAlign(CENTER);
  textSize(39);
  fill(0, 150, 0);
  textStyle(BOLD);
  text('You win!', width / 2, height * 0.3);
  textSize(24);
  textStyle(NORMAL);
  text('Thank you for picking up litter.', width / 2, height * 0.4);
  text('Now click for drawing fun.', width / 2, height * 0.5);
  pop();
}

function youWinMouseClicked() {
  clear();
  state = 'draw';
  drawSetup();
}

function restartGame() {
  clear();
  state = 'title';
  points = 0;
}
