'use strict';

let state = 'title';
let cnv;
let points = 0;
let w = 1000;
let h = 500;
let cloud;
let frenchie;
let sf;
let hat;
let sunglasses;

let posX = 0;
let posY = 0;

let button;


function preload() {

  cloud = loadImage("assets/cloudin.png");
  frenchie = loadImage("assets/frenchie.png");
  sf = loadImage("assets/sf.png")
  hat = loadImage("assets/hat.png")
  sunglasses = loadImage("assets/sunglasses.png")


}




function setup() {
  cnv = createCanvas(w, h);
  textFont("Fredericka the Great");


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

  }

}



function title() {


  background(53, 70, 57);
  textSize(80);
  fill(255);
  textAlign(CENTER);
  text('Off to Paris', w / 2, h / 5);


  textSize(30);

  text('click here to start', w / 2, h / 2);
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level 1'

}


function level1() {
  background(53, 70, 57);
  textSize(18);
  text('San Francisco, 58°F, 11:22 AM', posX, 210, 410);
  image(cloud, posX, 10, 400, 200);
  image(frenchie, posX, 400, 100, 100);
  image(sf, 500, 203, 300, 300);

  posX += 1;
  posY += 1;

  if (posX > 500) {
    background(53, 70, 57);
    fill(255)
    textSize(20);
    text('You take a pit stop at a souvenir shop in SF, which of the two items would you buy?', w / 2, h / 5);
    image(hat, 150, 40, 300, 400);
    text('Hat', 270, 410);
    image(sunglasses, 530, 220, 300, 100);
    text('Sunglasses', 710, 410);




  }
}

function level1MouseClicked() {
  points++;
  console.log('points = ' + points);

  if (points >= 10) {
    state = 'you win';
  }
}
