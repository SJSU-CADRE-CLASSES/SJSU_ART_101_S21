'use strict'


let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
// let x = 50;
let player;
let coin;

function setup() {
  cnv = createCanvas(w, h);

  textFont('monospace');

  player = new Player();

  coin = new Coin();
}

//......................................

function draw() {

  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleClicked);
      break;
    case 'lvl 1':
      //execute code
      level1();
      cnv.mouseClicked(level1Clicked);

      if (coin.move === player.move){
        points += 1;
      } else{

      }

      // if (keyIsDown(LEFT_ARROW)) {
      //   player.x -= 15;
      // }
      //
      // if (keyIsDown(RIGHT_ARROW)) {
      //   player.x += 15;
      // }
      //
      // if (keyIsDown(UP_ARROW)) {
      //   player.y -= 15;
      // }
      //
      // if (keyIsDown(DOWN_ARROW)) {
      //   player.y += 15;
      // }
      // player.display();

      break;
    case 'you win':
      youWin();
      cnv.mouseClicked(youWinClicked);
      break;
    default:
      break;
  }



}

//......................................

function keyPressed(){
  if (keyCode === LEFT_ARROW){
    player.direction = 'left';
  } else if (keyCode === RIGHT_ARROW) {
    player.direction = 'right';
  } else if (keyCode === UP_ARROW) {
    player.direction = 'up';
  } else if (keyCode === DOWN_ARROW) {
    player.direction = 'down';
  } else if (key == ' ') {
    player.direction = 'still';
  }
}

//......................................

function title() {
  background(10);
  textSize(80);
  fill(200);
  textAlign(CENTER);
  text('MY GAME', w/2, h/5);
  textSize(40);
  text('click anywhere to start', w/2, h/2);
}


function titleClicked() {
    console.log('canvas is clicked on title page');
    state = 'lvl 1';
}

//......................................

function level1() {
  background(133,123,150);
  fill(250,200,10);
  textSize(20);
  text(`click for points
use up,down,left,right to move
spacebar to stop`,w/2,h/2);
  text(`point:` + points, w/2, h/3);
  // circle(x,50,20);
  push();
    player.display();
    player.move();
  pop();

  push();
  fill(129,34,56);
  coin.display();
  coin.move();
  pop();
}

function level1Clicked() {
    points += 1;
    console.log('points = '+ points);
    // x = x + 10;

    if (points >= 10){
      state = 'you win';
    }
}

//......................................

function youWin(){
  background(200,150,152);
  textSize(80);
  fill(0);
  textAlign(CENTER);
  text('YOU WIN', w/2, h/6);
  textSize(40);
  text('click anywhere to restart', w/2, h/2);
}

function youWinClicked(){
  state = 'title';
  points = 0;
}

//......................................

// if (state === 'title') {
//   title();
//   cnv.mouseClicked(titleClicked);
// } else if (state === 'level 1') {
//   level1();
//   cnv.mouseClicked(level1Clicked);
// } else {
//
// }
