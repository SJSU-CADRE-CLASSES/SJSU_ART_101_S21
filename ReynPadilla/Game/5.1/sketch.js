'use strict';

// global variables
let state = 'title';
let cnv;
let points = 0;
let w = 750;
let h = 750;
let player;
let coins = [];
let enemies = [];
let sharks = [];
let reverseSharks = [];
let playerImg;
let coinImg;
let enemyImg;
let oceanImg;
let sharkImg;
let reverseSharkImg;

// preload image assets
function preload(){
  playerImg = loadImage('assets/net.png');
  coinImg = loadImage('assets/waterBottle.png');
  enemyImg = loadImage('assets/fish.png');
  oceanImg = loadImage('assets/ocean.png');
  sharkImg = loadImage('assets/shark.png');
  reverseSharkImg = loadImage('assets/reverseShark.png');
}

// create canvas and player
function setup (){
  cnv = createCanvas(w, h);
  imageMode(CENTER);
  rectMode(CENTER);
  textFont('monospace');
  player = new Player();
}

function draw (){

  switch (state){
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'level 1':
      level1();
      break;
    case 'you win':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;
    case 'game over':
      gameOver();
      cnv.mouseClicked(gameOverMouseClicked);
      break;
    default:
      break;
  }
}

// when an arrow key is pressed, update player direction
function keyPressed(){
  if (keyCode == LEFT_ARROW){
    player.direction = 'left';
  } else if (keyCode == RIGHT_ARROW){
    player.direction = 'right';
  } else if (keyCode == UP_ARROW){
    player.direction = 'up';
  } else if (keyCode == DOWN_ARROW){
    player.direction = 'down';
  } else if (key == ' '){
    player.direction = 'still';
  }
}

// when a key is released, make the player still
function keyReleased(){
  let numberKeysPressed = 0;
  if (keyIsDown(LEFT_ARROW)){
    numberKeysPressed++;
  }
  if (keyIsDown(RIGHT_ARROW)){
    numberKeysPressed++;
  }
  if (keyIsDown(DOWN_ARROW)){
    numberKeysPressed++;
  }
  if (keyIsDown(UP_ARROW)){
    numberKeysPressed++;
  }
  console.log(numberKeysPressed);
  if (numberKeysPressed == 0){
    player.direction = 'still';
  }
}

// draw title screen state
function title(){
  background(0);
  textSize(70);
  fill(255);
  textAlign(CENTER);
  text('Save the Ocean', w/2, h/2);
  textSize(30);
  text ('click anywhere to start', w/2, h * 3 / 4);
}

// when mouse is clicked on title screen, go to level 1 screen state
function titleMouseClicked(){
    console.log('canvas is clicked on title page');
    state = 'level 1';
}

function level1(){
  // create background
  background(185, 242, 255);
  image(oceanImg, h/2, h/2, w, h);

  // create water bottles
  if (random(1) <= 0.01){
    coins.push(new Coin());
  }
  // create enemy fish
  if (random(1) <= 0.015){
    enemies.push(new Enemy());
  }
  // create enemy shark
  if (random(1) <= 0.002){
    sharks.push(new Shark());
  }
  // create enemy reverse shark
  if (random(1) <= 0.002){
    reverseSharks.push(new ReverseShark());
  }

  // draw player
  player.display();
  player.move();

  // draw all coins
  for (let i = 0; i < coins.length; i++){
    coins[i].display();
    coins[i].move();
  }

  // draw all fish enemies
  for (let i = 0; i < enemies.length; i++){
    enemies[i].display();
    enemies[i].move();
  }

  // draw all shark enemies
  for (let i = 0; i < sharks.length; i++){
    sharks[i].display();
    sharks[i].move();
  }

  // draw all reverse shark enemies
  for (let i = 0; i < reverseSharks.length; i++){
    reverseSharks[i].display();
    reverseSharks[i].move();
  }

  // check collision, if collision increase points by 1 AND splice coint out of array
  // need to iterate backwards through array
  for (let i = coins.length - 1; i >= 0; i--){
    //check collision with player
    if (dist(player.x, player.y, coins[i].x, coins[i].y) <= (player.r + coins[i].r) / 2){
      points++;
      console.log(points);
      coins.splice(i, 1);
    } else if (coins[i].y > h){
      coins.splice(i, 1);
      console.log('coin is out');
    }
  }
  // check enemy fish collision
  for (let i = enemies.length - 1; i >= 0; i--){
    //check collision with player
    if (dist(player.x, player.y, enemies[i].x, enemies[i].y) <= (player.r + enemies[i].r) / 2){
      points -= 2;
      console.log(points);
      enemies.splice(i, 1);
    } else if (enemies[i].y > h){
      enemies.splice(i, 1);
      console.log('enemy is out');
    }
  }
  // check enemy shark collision
  for (let i = sharks.length - 1; i >= 0; i--){
    // check collision with player
    if (dist(player.x, player.y, sharks[i].x, sharks[i].y) <= (player.r + sharks[i].r) / 2){
      // if player touches shark, game is instantly over
      state = 'game over';
    } else if (sharks[i].y > h){
      sharks.splice(i, 1);
      console.log('shark is out');
    }
  }
  // check enemy reverse shark collision
  for (let i = reverseSharks.length - 1; i >= 0; i--){
    // check collision with player
    if (dist(player.x, player.y, reverseSharks[i].x, reverseSharks[i].y) <= (player.r + reverseSharks[i].r) / 2){
      // if player touches shark, game is instantly over
      state = 'game over';
    } else if (reverseSharks[i].y > h){
      reverseSharks.splice(i, 1);
      console.log('reverse shark is out');
    }
  }

  // display current points
  fill(0, 0, 0);
  text('points: ' + points, w/4, h - 30);

  // check if game is won or lost
  // if more than 20 points, win game. if less than 0 points, lose game
  if (points >= 20){
    state = 'you win';
  } else if (points <= -1){
    state = 'game over';
  }
}

// draw win screen state
// reset enemies and coins
function youWin(){
  coins = [];
  enemies = [];
  sharks = [];
  reverseSharks = [];

  background(255, 50, 80);
  textSize(80);
  stroke(255);
  fill(255, 255, 255);
  text('YOU WIN', w/2, h/2);
  textSize(30);
  text ('click anywhere to restart', w/2, h * 3 / 4);
}

// when mouse is clicked on win screen state, reset to title state
function youWinMouseClicked(){
  state = 'title';
  points = 0;
}

// draw game over screen state
// reset enemies and coins
function gameOver(){
  coins = [];
  enemies = [];
  sharks = [];
  reverseSharks = [];

  background(255, 50, 80);
  textSize(80);
  stroke(255);
  fill(255, 255, 255);
  text('Game Over', w/2, h/2);
  textSize(30);
  text ('click anywhere to restart', w/2, h * 3 / 4);
}

// when mouse is clicked on game over screen state, reset to title state
function gameOverMouseClicked(){
  state = 'title';
  points = 0;
}
