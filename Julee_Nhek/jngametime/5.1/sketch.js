var api = "https://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=dc6zaTOxFJmzC";
var query = "&q=aesthetic+tea";

'use strict';

let state = 'title';
let cnv;
let points = 0;
let w = 1000;
let h = 500;
// let player;
// let coin;
// let playerdog;
// let enemy
// let ending
let cloud;
let frenchie;
let sf;
let hat;
let sunglasses;

let posX = 0;
let posY = 0;




function preload(){
  // playerdog = loadImage('assets/frenchie.png');
  // enemy = loadImage('assets/rain.png');
  // ending = loadImage('assets/effiel.png');
     cloud = loadImage("assets/cloudin.png");
     frenchie = loadImage("assets/frenchie.png");
     sf = loadImage("assets/sf.png")
     hat = loadImage("assets/alienhat.png")
     sunglasses = loadImage("assets/sunglasses.png")
     night = loadImage("assets/nightsky.png")

}




function setup() {
  cnv = createCanvas(w, h);
  // var url = api + apiKey + query;
  // loadJSON(url, gotData);

  textFont("Fredericka the Great");
  // player = new Player();
  // coin = new Coin();
  //
  // player = new Player(140, 200);

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

  //   case 'you win':
  //   youWin();
  //   cnv.mouseClicked(youWinMouseClicked);
  //   break;
  // default:
  //   break;
  }

}

// function gotData(giphy) {
//   createImg(giphy.data[i].images.original.url);
// }
//
// function keyPressed(){
//   if (keyCode == LEFT_ARROW){
//     player.direction = 'left'
//   } else if (keyCode == RIGHT_ARROW) {
//     player.direction = 'right'
//   } else if (keyCode == UP_ARROW) {
//     player.direction = 'up'
//   } else if (keyCode == DOWN_ARROW) {
//     player.direction = 'down'
//   } else if (key = ' '){
//     player.direction = 'still';
//   }
// }

function title() {


  background(53,70,57);
  textSize(80);
  fill(255);
  textAlign(CENTER);
  text('Off to Paris', w/2, h/5);


  textSize(30);
  text('click anywhere to start', w/2, h/2);
}

function titleMouseClicked(){
    console.log('canvas is clicked on title page');
    state = 'level 1'

}


function level1() {
  background(53,70,57);
  image(cloud, posX, 10, 400, 200);
 image(frenchie, posX, 400, 100, 100);
 image(sf, 500, 203, 300, 300);

   posX += 1;
   posY += 1;

 if (posX > 500) {
   background(53, 70, 57);
   fill(255)
   textSize(20);
   text('You take a pit stop at a souvenir shop in SF, which of the two items would you buy?', w/2, h/5);

   image(hat, 150, 80, 300, 300);
   image(sunglasses, 530, 220, 300, 100);

  // player.display();
  // player.move();
  //
  // coin.display();
  // coin.move();


}
}
function level1MouseClicked() {
  points++;
  console.log('points = ' + points);

  if (points >= 10){
    state = 'you win';
  }
}

// function youWin(){
//   background(255, 50, 80);
//   textSize(80);
//   stroke(255);
//   text('YOU WIN', w/2, h/2);
//   textSize(30);
//   text('click anywhere to restart', w/2, h * 3/4);
//
// }
//
//
// function youWinMouseClicked(){
//   state = 'level 1';
//   points = 0;
// }
