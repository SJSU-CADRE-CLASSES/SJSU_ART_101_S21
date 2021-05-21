'use strict';


let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let STARTtitle;


function preload() {
STARTtitle = loadImage('media/STARTtitle.png');
}

function setup() {
  cnv = createCanvas(w, h);
  textFont('Courier New');

}

function draw() {

  switch (state) {
    case 'title':
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
    default:
      break;

  }
}

function title() {
  background(STARTtitle);
  textSize(25);
  stroke(0);
  fill(255,255, 153);
  textAlign(CENTER);
  text('Sensory Overload at the Grocery Store', w/2, h/1.2);

  textSize(18);
  text('click anywhere to start', w/2, h/1.1);
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level 1'
}

function level1() {
  background(50, 150, 200);
  stroke(50,140,215);
  text('click for points', w/2, h - 150);
}

function level1MouseClicked() {
  console.log('points = ' + points);
  points++;

  if (points >= 10) {
    state = 'you win';
  }
}

function youWin() {
  background(150, 250, 180);
  textSize(80);
  stroke(150,210,190);

  text('YOU WIN', w/2, h/2);

  textSize(30);
  text('click anywhere to restart', w/2, h * 3/4);
}

function youWinMouseClicked() {
  state = 'level 1';
  points = 0;

}
