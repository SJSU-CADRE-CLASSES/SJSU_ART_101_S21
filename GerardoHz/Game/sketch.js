'use strict';

let state= 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;

function setup(){
  cnv = createCanvas(w, h);
textFont('monospace');
}

function draw(){
switch(state){
  case 'title':
  title();
  cnv.mouseClicked(titleMouseClicked);
  break;
  case 'level 1':
  level1();
  cnv.mouseClicked(level1MouseClicked);
  break;
  case 'you win!!':
  youWin();
  cnv.mouseClicked(youWinMouseClicked);
  break;
  default:
  break;
}

}

function mousePressed() {
  state = 'level 1'

}
function title(){
  background(20);
  textSize(120);
  fill(280);
  textAlign(CENTER);
  text('SkyHigh',w/2,h/5);

  textSize(40);
  text('click anywhere to start',w/2,h/2);
}

function titleMouseClicked() {
console.log('canvas is clicked on title page');
state = 'level 1'
}

function level1(){
background(50,50,200);
text('click for points',w/2,h-30);

}

function level1MouseClicked(){

points++;
console.log('points = '+ points);
if (points >=10){
  state = 'you win!!'
}
}
function youWin(){
  background(245,50,90);
  textSize(60);
  stroke(280);
  text('You won!!!!!',w/2,h/2);

  textSize(20);
  text('click anywhere to restart',w/2,h*3/4);
}
function youWinMouseClicked(){
  points = 0;
state = 'level 1'

}
