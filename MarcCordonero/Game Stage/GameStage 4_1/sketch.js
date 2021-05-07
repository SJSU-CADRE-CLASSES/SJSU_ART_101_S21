'use strict';

let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let coin;

function setup() {
  cnv = createCanvas(w, h);

textFont ('monospace');

player = new Player();

coin = new Coin();
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
      break;
    default:
      break;
  }
}

function keyPressed(){
  if (keyCode == LEFT_ARROW){
    player.direction = 'left'
  } else if (keyCode == RIGHT_ARROW){
    player.direction = 'right'
  } else if (keyCode == UP_ARROW){
    player.direction = 'up'
  } else if (keyCode == DOWN_ARROW){
    player.direction = 'down'
  } else if (key = ' '){
    player.direction = 'still';
  }
}

function title() {
  background(0);
  textSize(40);
  fill(255);
  textAlign(CENTER);
  text('For My Friend Martin', w/2, h/5);
  textSize(18);
  text('He gets sad when he looses in League of Legends', w/2, h/4);
  textSize(30);
  text('click anywhere to start', w/2, h/2);
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level 1'
}

function level1() {
  background(50, 150, 200);
  // text('click for points', w/2, h - 30);

  player.display();
  player.move();

  coin.display();
  coin.move();
}


function level1MouseClicked() {
  points++;
  console.log('points = ' + points);

  if (points >= 10){
    state = 'you win';
  }
// note if more than one variable is added use:
// points += 2;
}

function youWin(){
  background(255, 50, 80);
  textSize(80);
  stroke(255);
  text('YOU WIN', w/2, h/2);

  textSize(30);
  text('click anywhere to restart', w/2, h * 3 / 4);
}

function youWinMouseClicked(){
  state = 'level 1';
  points = 0;
}
