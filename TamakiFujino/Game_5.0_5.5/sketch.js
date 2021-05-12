'use strict'

let state = 'title';
let cnv;
let points = 0;
let w = 500;
let h = 500;

function setup() {
  cnv = createCanvas(w, h);

  textFont('fantasy');
  textAlign(CENTER);
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
      //execute code
      break;
      case 'you win':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;
      default:
      break;


    }
  }

//   if (state === 'title') {
//     title();
//     cnv.mouseClicked(titleMouseClicked);
//
//   } else if (state === 'level 1' && points > 50){
//     level1();
//     cnv.mouseClicked(level1MouseClicked);
//
//   } else {
//
//   }
// }

// function canvasClicked() {
//   console.log('canvas is clicked');
//
// }

// function mousePressed () {
//   state = 'level 1';
// }

function title() {
  background(255, 50, 50);
  textSize(80);
  fill(255);
  text('MY GAME', w/2, h/5);

  textSize(25);
  text('click anywhere to start', w/2, h/2);
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level 1'
}

function level1() {
  background(50, 150, 200);
  text('click for points', w/2, h/2);
}

function level1MouseClicked() {

  points++;
  console.log('points = ' + points);

  if (points >= 10){
    state = 'you win';
  }
}

function youWin() {
  background(25, 250, 50);
  textSize(80);

  text('YOU WON!', w/2, h/5);

  textSize(25);
  text('click anywhere to restart', w/2, h/2);
}

function youWinMouseClicked (){
  state = 'level 1';
  points = 0;
}
