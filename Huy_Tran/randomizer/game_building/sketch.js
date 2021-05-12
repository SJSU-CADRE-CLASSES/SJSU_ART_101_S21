//--------------------------NEW DAYS WITH BUILING GAME-------------------------//
//------------------------------Build 05/03/2021------------------------------//
'use strict';

let state = 'title';
let cnv;

function setup() {
  cnv = createCanvas(550, 550);
  // cnv.mouseClicked(canvasClicked);
  //Short way to write same syntax as above
  // cnv.mouseClicked(function () {
  //   console.log('Canvas is Clicked');
  //   state = 'level 1'
  // });
}

function draw() {
  if (state === 'title') {
    title();
    cnv.mouseClicked(titleMouseClicked);
  } else if (state === 'level 1') {
    level1();
    cnv.mouseClicked(level1MouseClicked);
  } else {
    
  }
}

// function mousePressed() {
//   state = 'level 1';
// }

// function canvasClicked() {
//  console.log('Canvas is Clicked');
// }

function title() {
  background(220);
  textSize(40); //Should be setup size on top of text.
  text('SHOOTING GERMS', 100, 100);


  textSize(20); //Should be setup size on top of text.
  text('click to start', 220, 150);

}

function titleMouseClicked() {
    console.log('Canvas is clicked on the title page');
    state = 'level 1'
  }

function level1() {
  background(50, 150, 250);
}

function level1MouseClicked() {
  console.log('Canvas is clicked on the level 1');
}
