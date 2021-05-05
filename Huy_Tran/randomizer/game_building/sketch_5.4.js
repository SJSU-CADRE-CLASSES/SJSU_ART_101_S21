//--------------------------NEW DAYS WITH BUILING GAME-------------------------//
//------------------------------Build 05/05/2021------------------------------//
'use strict';

let state = 'title';
let cnv;
let points = 0;


function setup() {
  cnv = createCanvas(550, 550);
}

//-------------------FUNCTION DRAW LOOP----------------//
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

    case 'You Win':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;

    default:
      break;
  }
}
//--------------------------END------------------------------//

//-------------------FUNCTION SETUP FOR CALL----------------//
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
  textSize(18);
  text('Click for points', 220, 100);
}

function level1MouseClicked() {
  points++;
  console.log('points = ' + points);

  if (points>=10) {
    state = 'You Win';
  }

}

function youWin() {
  background(255,0,0);
  textSize(40); //Should be setup size on top of text.
  text('WOOHOO! YOU WIN', 100, 100);


  textSize(20); //Should be setup size on top of text.
  text('click to restart', 220, 150);
}

function youWinMouseClicked() {
  state = 'level 1';
  points = 0;
}
//---------------------------END-----------------------------//
