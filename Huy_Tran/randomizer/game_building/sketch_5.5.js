//--------------------------NEW DAYS WITH BUILING GAME-------------------------//
//------------------------------Build 05/05/2021------------------------------//
'use strict';

let state = 'title';
let cnv;
let points = 0;
let w = 800;
let h = 600;

function setup() {
  cnv = createCanvas(w, h);

  textFont('Raleway, Oswald');
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
  text('SHOOTING GERMS', w/3, h/3);

  textSize(20); //Should be setup size on top of text.
  text('click to start', w/2.3, h/2.5);

}

function titleMouseClicked() {
  console.log('Canvas is clicked on the title page');
  state = 'level 1'
}

function level1() {
  background(130,230,50);
  textSize(18);
  textAlign(CENTER);
  // textFont('Serif');
  text('Click for points', w/2, h/2.5);
}

function level1MouseClicked() {
  points++;
  console.log('points = ' + points);

  if (points>=10) {
    state = 'You Win';
  }

}

function youWin() {
  background(230,130,50);
  textSize(40); //Should be setup size on top of text.
  text('WOOHOO! YOU WIN', w/2, h/2);


  textSize(20); //Should be setup size on top of text.
  text('click to restart', w/2, h/1.8);
}

function youWinMouseClicked() {
  state = 'level 1';
  points = 0;
}
//---------------------------END-----------------------------//
