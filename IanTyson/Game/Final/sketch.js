'use strict';



let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let img1;
let img2;
let img3;
let img4;
let player;
let stars = [];
let t = false;

function preload(){
  img1 = loadImage('Images/Background.png');
  img2 = loadImage('Images/Star.png');
  img3 = loadImage('Images/StarClicked.png');
  img4 = loadImage('Images/Player.png');
}

function setup(){
  noCursor();
  cnv = createCanvas(w,h);

  textFont('monospace');

  player = new Player();

  stars.push(new Star());
}

function draw(){

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
  //code here for the default
  break;
}
}

function keyPressed(){
  if (key == 'a'){
    player.direction = 'left'
  } else if (key == 'd'){
    player.direction = 'right'
  } else if (keyCode == LEFT_ARROW){
    player.direction = 'left'
  } else if (keyCode == RIGHT_ARROW){
    player.direction = 'right'
  } else if (key == " "){
    player.direction = 'still'
  }
}

function title(){
  background(0);
  textSize(80);
fill(255);
  textAlign(CENTER);
  text('STARCATCHER', w/2, h/5);
textSize(30);
  text('press A/D or arrows to move', w/2, h/1.7);
  text('__________________________', w/2, h/1.6);
  text('spacebar to stop', w/2, h/1.4);
  textSize(25);
  text('click anywhere to begin', w/2, h/1.1);
  image(img2, 260, h/3);
  image(img2, 170, h/3);
  image(img2, 350, h/3);
}

function titleMouseClicked(){
  state = 'level 1';
}aa

function level1(){
  background(img1);

if (random(1) <= 0.009){
  stars.push(new Star());
}

player.display();
player.move();


for (let i =0; i < stars.length; i++){
  stars [i].display();
  stars [i].move();
}

text ('catch the falling stars', w/2, h - 550);

for (let i = stars.length - 1; i >= 0; i-- ){
if (dist(player.x,player.y,stars[i].x,stars[i].y) <= (player.r + stars[i].r) / 2){
 points++;
trigger();
  image(img3,stars[i].x, stars[i].y);
  stars.splice(i, 1);
}
}
message();
}


//make this message a part of an array of quotes AND last longer

function trigger(){
  t = true;
}

function message(){
  if (t === true){
  text ('You are able to get through this', w/2, h/2);
} else {

}
}

function level1MouseClicked(){
  points++;
  console.log ('points =' + points);

if (points >= 10){
  state = 'you win';
}
}

function youWin(){
  background(255,50,80);
  textSize (80);
  stroke(255);
  text('YOU WIN', w/2, h/2);

  textSize(30);
  text('click anywhere to restart', w/2, h * 3 / 4);
}

function youWinMouseClicked(){
  state = 'level 1';
  points = 0;
}
