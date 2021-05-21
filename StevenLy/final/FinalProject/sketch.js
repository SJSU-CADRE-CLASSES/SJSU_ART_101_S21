// var api = "https://api.giphy.com/v1/gifs/search?";
// //url to the api
// var apiKey = "&api_key=MEy9ed99JF4OzucLfqzwSRP7SFYyzu7d";
// //api key
// var query = "&q=demonslayer";

var song;
var slider;
var slash;
var killed;
'use strict';
let state = 'title';
let cnv;
let points = 0;
let w = window.innerWidth;
let h = window.innerHeight;
let player;
let coin = [];
let enemies = [];
let playerImg;
let coinImg;
let backgroundImg;
let winImg;
let instructImg;
let loseImg;
let startImg;
let enemyImg;

function preload() {
  song = loadSound('songs/opening.mp3');
  slash = loadSound('songs/thunderclap.mp3');
  killed = loadSound('songs/death.mp3')
  playerImg = loadImage('assets/player.png');
  coinImg = loadImage('assets/coin.png');
  backgroundImg = loadImage('assets/background.png');
  winImg = loadImage('assets/win.png');
  instructImg = loadImage('assets/instruction.png');
  loseImg = loadImage('assets/lose.png');
  startImg = loadImage('assets/start.png');
  enemyImg = loadImage('assets/enemy.png');
}

function setup() {
  song.play();
  song.setVolume(0.01);
  slider = createSlider(0, 1, 0.01, 0.01);
  cnv = createCanvas(w, h);
  // var url = api + apiKey + query;
  // loadJSON(url, gotData);


  textFont('monospace');
  textStyle(BOLD);

  player = new Player();

  // coin [0] = new Coin();
  coin.push(new Coin());
  enemies.push(new Enemy());
}

function draw() {
  song.setVolume(slider.value());

  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'instruct':
      instruct();
      cnv.mouseClicked(instructMouseClicked);
      break;
    case 'level 1':
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

// function gotData(giphy) {
//   createImg(giphy.data[0].images.original.url);



function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    player.direction = 'left'
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right'
  } else if (keyCode == UP_ARROW) {
    player.direction = 'up'
  } else if (keyCode == DOWN_ARROW) {
    player.direction = 'down'
  } else if (key = ' ') {
    player.direction = 'still';
  }
}

function keyReleased() {

  let numberKeysPressed = 0;

  if (keyIsDown(LEFT_ARROW)) {
    numberKeysPressed++;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    numberKeysPressed++;
  }

  if (keyIsDown(DOWN_ARROW)) {
    numberKeysPressed++;
  }

  if (keyIsDown(UP_ARROW)) {
    numberKeysPressed++;
  }

  if (numberKeysPressed == 0) {
    player.direction = 'still';
  }
}

function title() {

  background(startImg);
  textSize(80);
  stroke(255);
  text('Demonslayer Realm', w / 2, h / 5);
  fill(255,69,0);
  textAlign(CENTER);


  textSize(30);
  text('Click anywhere to start', w / 2, h / 2);
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'instruct'
}

function instruct(){
  background(instructImg);
}

function instructMouseClicked(){
  state = 'level 1'
}

function level1() {
  background(backgroundImg);

  if (random(1) <= 0.04) {
    coin.push(new Coin());
  }

  if (random(1) <= 0.04) {
    enemies.push(new Enemy());
  }

  player.display();
  player.move();

  // iterating through coins array to display and move them

  // using for loop
  for (let i = 0; i < coin.length; i++) {
    coin[i].display();
    coin[i].move();
  }

  for (let i = 0; i < enemies.length; i++) {
    enemies[i].display();
    enemies[i].move();
  }

  // using foreach

  // coin.forEach(function(coin){
  //   coin.display();
  //   coin.move();
  // })


  //check for collision, if there is a collision increase points by 1 and SPLICE that coin out of array
  // need to iterate backwards through array
  for (let i = coin.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, coin[i].x, coin[i].y) <= (player.r + coin[i].r) / 2) {
      points++;
      slash.play();
      slash.setVolume(0.01);
      coin.splice(i, 1);
    } else if (coin[i].y > h) {
      coin.splice(i, 1);
    }
  }

  for (let i = enemies.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, enemies[i].x, enemies[i].y) <= (player.r + enemies[i].r) / 2) {
      points--;
      killed.play();
      killed.setVolume(0.01);
      enemies.splice(i, 1);
    } else if (enemies[i].y > h) {
      enemies.splice(i, 1);
    }
  }

  text('Demons killed: ' + points, w / 4, h - 30);

// game points and death limit
  if (points >= 15) {
    state = 'you win';
  } else if (points <= -1){
    state = 'game over';
  }

}

function level1MouseClicked() {
  // points++;
  // console.log('points = ' + points);
  //
  // if (points >= 10) {
  //   state = 'you win';
  // }
}

function youWin() {
  background(winImg);
  textSize(80);
  stroke(255);
  text('YOU WIN', w / 2, h / 2);

  textSize(30);
  text('Click anywhere to restart', w / 2, h * 3 / 4);
}

function youWinMouseClicked() {
  state = 'title';
  points = 0;
}

function gameOver() {
  background(loseImg);
  textSize(80);
  stroke(255);
  text('You died', w / 2, h / 2);

  textSize(30);
  text('Click anywhere to restart', w / 2, h * 3 / 4);
}

function gameOverMouseClicked() {
  state = 'title';
  points = 0;
}
