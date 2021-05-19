var api = "https://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=dc6zaTOxFJmzC";
var query = "&q=aesthetic+tea";

'use strict';

let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let coin;
let playerdog;
let enemy
let ending


function preload(){
  playerdog = loadImage('assets/frenchie.png');
  enemy = loadImage('assets/balloon.png');
  ending = loadImage('assets/effiel.png');

}




function setup() {
  cnv = createCanvas(w, h);
  var url = api + apiKey + query;
  loadJSON(url, gotData);

  textFont("Fredericka the Great");
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

function gotData(giphy) {
  createImg(giphy.data[i].images.original.url);
}

function keyPressed(){
  if (keyCode == LEFT_ARROW){
    player.direction = 'left'
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right'
  } else if (keyCode == UP_ARROW) {
    player.direction = 'up'
  } else if (keyCode == DOWN_ARROW) {
    player.direction = 'down'
  } else if (key = ' '){
    player.direction = 'still';
  }
}

function title() {


  background(53,70,57);
  textSize(80);
  fill(255);
  textAlign(CENTER);
  text('MY GAME', w/2, h/5);


  textSize(30);
  text('click anywhere to start', w/2, h/2);
}

function titleMouseClicked(){
    console.log('canvas is clicked on title page');
    state = 'level 1'

}


function level1() {
  background(53,70,57);


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
}

function youWin(){
  background(255, 50, 80);
  textSize(80);
  stroke(255);
  text('YOU WIN', w/2, h/2);


  textSize(30);
  text('click anywhere to restart', w/2, h * 3/4);

}


function youWinMouseClicked(){
  state = 'level 1';
  points = 0;
}
