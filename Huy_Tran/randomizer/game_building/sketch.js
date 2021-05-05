//--------------------------NEW DAYS WITH BUILING GAME-------------------------//
//------------------------------Build 05/03/2021------------------------------//
'use strict';

let state = 'title';
let cnv;

function setup() {
  cnv = createCanvas(450, 550);
  cnv.mouseClicked(function(){
    console.log('Canvas is Clicked');
  });
}

function draw() {
  if (state === 'title') {
    title();
  } else if (state === 'level 1') {
    level1();
  }
}

function title() {
  background(220);
  text('GERMS', 100, 50);
  textSize(150);
  stroke(250);


  text('click anywhere else to start', 100, 300);
  textSize(15);
}

function level1() {
  background(50, 150, 250);
}
