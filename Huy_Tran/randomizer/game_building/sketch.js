//---------HOW TO BUILD A GAME----------//
//--------------05/03/2021-------------//

'use strict';

let state = 'title';
let cnv;

function setup() {
  createCanvas(450, 600);
  background(100);
}

function draw() {
  if (state === 'title') {
    title();
  } else if (state === 'level 1') {
    level1();
  }
}

function mousePressed() {
  state = 'level1';
}

function title() {
  background(100);
  textSize(50);
  text('VIRUS SHOOTING', 100, 100);
  stroke(255);
}

function level1() {
  background(50 150 200);
  textSize(50);
  text('VIRUS SHOOTING', 100, 100);
  stroke(255);
}
