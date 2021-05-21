'use strict';

// canvas variables
let state = 'title';
let cnv;
let w = 600;
let h = 600;

// numerical gameplay variables
let points = 1;
let lives = 7;


// game object variables
let player;
let coins = [];
let enemies = [];
let projectiles = [];

// image variables
let playerImg;
let coinImg;
let enemyImg;
let projectileImg;
let backgroundImg;
let gameOverImg;

function preload() {
  // loading image assets
  playerImg = loadImage('assets/Player/player.png');
  enemyImg = loadImage('assets/Player/enemy.png');
  projectileImg = loadImage('assets/Player/projectile.png');
  coinImg = loadImage('assets/Player/coin.png');
  backgroundImg = loadImage('assets/Player/Background.png');
  gameOverImg = loadImage('assets/Player/gameover.png');
}

function setup() {
  // setting up canvas
  cnv = createCanvas(w, h);
  frameRate(60);
  imageMode(CENTER);
  rectMode(CENTER);

  textFont('monoSpace');

  // initializing variables
  player = new Player();
  coins.push(new Coin());
  enemies.push(new Enemy());
  projectiles.push(new Projectile());
  console.log(projectiles);
}

function draw() {

  switch (state) {
    case 'title':
    push();
    image(backgroundImg,w/2, h/2);
    backgroundImg.resize(600,600);
    pop();
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'level1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
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

function keyPressed() {
  if (keyCode == 87 || keyCode == 38) {
    player.direction = 'up'
  } else if (keyCode == 83 || keyCode == 40) {
    player.direction = 'down'
  } else if (keyCode == 65 || keyCode == 37) {
    player.direction = 'left'
  } else if (keyCode == 68 || keyCode == 39) {
    player.direction = 'right'
  } else if (keyCode == 32) {
    projectiles.push(new Projectile);
  }
}

function keyReleased() {
  let numberKeysPressed = 0;

  if (keyIsDown(87 || 38)) {
    numberKeysPressed++;
  }
  if (keyIsDown(83 || 40)) {
    numberKeysPressed++;
  }
  if (keyIsDown(65 || 37)) {
    numberKeysPressed++;
  }
  if (keyIsDown(68 || 39)) {
    numberKeysPressed++;
  }
  console.log(numberKeysPressed);

  if (numberKeysPressed == 0) {
    player.direction = 'still';
  }
}

function title() {
  textSize(80);
  fill(255);
  textAlign(CENTER);
  text('Alien Attack', w / 2, h / 5);

  textSize(20);
  text('click anywhere to start', w / 2, h / 2);
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level1';
}

function level1() {
  push();
  image(backgroundImg,0, 0);
  backgroundImg.resize(1200,1200);
  pop();

  // coin spawning timer
  if (random(1) <= 0.001) {
    coins.push(new Coin());
  }

  // enemy spawning timer
  if (random(1) <= 0.03) {
    enemies.push(new Enemy());
  }

  // spawning projectiles
  for (let i = 0; i < projectiles.length; i++) {
    projectiles[i].display();
    projectiles[i].move();
  }

// spawning player
  player.display();
  player.move();

  //spawning multiple coin objects
  for (let i = 0; i < coins.length; i++) {
    coins[i].display();
    coins[i].move();
  }

  // spawning multiple enemy objects
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].display();
    enemies[i].move();

    // losing lives from projectiles hitting the ground or the player
    if (enemies[i].y >= h - enemies[i].r / 2 || dist(player.x, player.y, enemies[i].x, enemies[i].y) <= (player.r + enemies[i].r) / 2) {
      lives--;
      points--;
      enemies.splice(i, 1);
    }
  }

// projectiles collision system
for (let i = projectiles.length - 1; i >= 0; i--) {
  //point collection system for collision with coins
  for (let j = coins.length - 1; j >= 0; j--) {
    if (dist(projectiles[i].x, projectiles[i].y, coins[j].x, coins[j].y) <= (projectiles[i].r + coins[j].r) / 2) {
      points + 5;
      coins.splice(j, 1);
    } else if (coins[j].y > h) {
      coins.splice(j, 1);
    }
  }
  // point collection system for collision with enemies
  for (let j = enemies.length - 1; j >= 0; j--) {
    if (dist(projectiles[i].x, projectiles[i].y, enemies[j].x, enemies[j].y) <= (projectiles[i].r + enemies[j].r) / 2) {
      points++;
      if(points >= 10) {
        lives++;
      }
      enemies.splice(j, 1);
    }
  }
}

// text score and lives displayed
  text(`Points: ${points} / 25`, w / 4, h - 30);
  text(`Lives: ${lives}`, w / 4, h - 50);

  if (points >= 25) {
    state = 'you win';
  } else if (lives <= 0) {
    state = 'game over';
  }
}

function level1MouseClicked() {
  console.log('points = ' + points);

  if (points >= 10) {
    state = 'you win';
  }
}

function youWin() {
  background(255, 50, 80);
  textSize(80);
  stroke(255);
  text('YOU WIN!', w / 2, h / 2);

  textSize(20);
  text('click anywhere to restart', w / 2, h / 4);
}

function youWinMouseClicked() {
  state = 'title';
  points = 1;
  enemies = [];
  projectiles = [];
}

function gameOver() {
  push();
  image(gameOverImg,w/2, h/2);
  gameOverImg.resize(600,600);
  pop();
  textSize(80);
  stroke(255);

  // check number of lives and send to game over state at zero
  if (lives >= 0) {
    text(`${lives - 1} lives left!`, w / 2, h / 2);

    textSize(20);
    text('click anywhere to continue playing', w / 2, h / 4);
  } else {
    text('Game Over!', w / 2, h / 2);

    textSize(20);
    text('click anywhere to restart', w / 2, h / 4);
  }
}

function gameOverMouseClicked() {
  if (lives >= 0) {
    lives--;
    state = 'level1';
  } else {
    state = 'title'
  }
  enemies = [];
  projectiles = [];
  points = 1;
}
