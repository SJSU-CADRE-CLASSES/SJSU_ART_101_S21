'use strict';

let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let coins = [];

function setup() {
  cnv = createCanvas(w, h);
  textFont('monospace');

  player = new Player();
  // coins[0] = new Coin();
coins.push(new Coin());

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

  // if (state === 'title') {
  //   title();
  //   cnv.mouseClicked(titleMouseClicked);
  // } else if (state === 'level 1') {
  //   level1();
  //   cnv.mouseClicked(level1MouseClicked);
  // } else
}

function keyPressed() {

  if (keyCode == LEFT_ARROW) {
    player.direction = 'left'

  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right'

  } else if (keyCode == UP_ARROW) {
    player.direction = 'up'

  } else if (keyCode == DOWN_ARROW) {
    player.direction = 'down'

  }else if (key = ' '){
    player.direction = 'still'
  }
}

function title() {
  background(100);
  textSize(80);
  fill(0);
  stroke(255);
  textAlign(CENTER);
  text('My Game', w / 2, h / 2);
  fill(255);
  textSize(30);
  text('click anywhere to start', w / 2, h - 200);
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level 1'
}

function level1() {
  background(50, 150, 200);
  fill(255);

  if(random(1) <= 0.01){
    coins.push(new Coin());
  }

  player.display();
  player.move();



  for (let i = 0; i < coins.length; i ++){
    coins[i].display();
    coins[i].move();
  }

  if (dist(player.x, player.y, coins[0].x, coins[0].y) <= (player.r + coins[0].r)/2){
    points++;
    console.log(points);
  }
  text(`points: ${points}`, w/4 , h - 20);

}

function level1MouseClicked() {
  points++;
  console.log('points =' + points);

  if (points >= 10) {
    state = 'you win'
  }

}

function youWin() {
  background(255, 50, 80);
  textSize(80);
  stroke(255);
  textAlign(CENTER);
  text('You Win', w / 2, h / 2);

  textSize(30);
  fill(255);
  text('click anywhere to restart', w / 2, h - 200);
}

function youWinMouseClicked() {
  state = 'level 1';
  points = 0;
}
