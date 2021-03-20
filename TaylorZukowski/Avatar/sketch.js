let mic;
let polka1;
let polka2;
let polka3;
let polka4;
let polka5;
let polka6;
let polka7;
let polka8;
let polka9;
let polka10;
    

function setup() {
  createCanvas(400, 400);

  mic = new p5.AudioIn();
  mic.start();
  
  //background polka dots from class
  polka1= new Polkadots(width * .01, height * .01,     45);
  polka2= new Polkadots(width * .02, height * 0,       35);
  polka3= new Polkadots(width * .3, height * .3,       30);
  polka4= new Polkadots(width * .4, height * .4,       20);
  polka5= new Polkadots(width * .3, height * .1,       75);
  polka6= new Polkadots(width * .2, height * .2,       25);
  polka7= new Polkadots(width * .2, height * .3,       110);
  polka8= new Polkadots(width * .1, height * .4,       225);
  polka9= new Polkadots(width * .6, height * .02,       0);
  polka10= new Polkadots(width * .5, height * .5,       0);
}

function draw() {
  
  //background color
  if (keyIsPressed === true) {
  background(210, 134, 272);
  } else {
  background(157, 234, 242);
  }
  
  //background polka dots from class
  polka1.display();
  polka2.display();
  polka3.display();
  polka4.display();
  polka5.display();
  polka6.display();
  polka7.display();
  polka8.display();
  polka9.display();
  polka10.display();
  
  polka1.move();
  polka2.move();
  polka3.move();
  polka4.move();
  polka5.move();
  polka6.move();
  polka7.move();
  polka8.move();
  polka9.move();
  polka10.move();
  
  textSize(55);
  fill(255, 255, 255)
  textFont('Curlz MT');
  text('Joyful Whisk', 60, 50);
  
  drawLeftcake();
  
  drawRightcake();
  
  drawMiddlestand();
  
  drawCakebottom();
  
  drawCakemiddle();
  
  drawCaketop();
 
  drawLeftcandles();
  
  drawRightcandles();
   
  //candle flames flicker with mic
  micLevel = mic.getLevel();
  if (micLevel < 0.025){
   drawCandleflames();
  }
  
}

function drawLeftcake(){
   //left cake
  noStroke();
  fill(255, 255, 255);
  beginShape();
  vertex(width * .1, height * 1);
  vertex(width * .1, height * .98);
  vertex(width * .2, height * .98);
  vertex(width * .2, height * 1);
  endShape(CLOSE);
  
   noStroke();
  fill(255, 255, 255);
  beginShape();
  vertex(width * .14, height * 1);
  vertex(width * .14, height * .8);
  vertex(width * .16, height * .8);
  vertex(width * .16, height * 1);
  endShape(CLOSE);
  
  noStroke();
  fill(255, 255, 255);
  beginShape();
  vertex(width * .02, height * .8);
  vertex(width * .02, height * .78);
  vertex(width * .28, height * .78);
  vertex(width * .28, height * .8);
  endShape(CLOSE);
  
   noStroke();
  fill(110, 81, 29);
  beginShape();
  vertex(width * .04, height * .78);
  vertex(width * .26, height * .78);
  vertex(width * .26, height * .55);
  vertex(width * .04, height * .55);
  endShape(CLOSE);
  
}

function drawLeftcandles(){
   //left candles
  noStroke();
  fill(255, 255, 255);
  beginShape();
  vertex(width * .145, height * .55);
  vertex(width * .145, height * .5);
  vertex(width * .155, height * .5);
  vertex(width * .155, height * .55);
  endShape(CLOSE);
  noStroke();
  fill(255, 255, 255);
  beginShape();
  vertex(width * .095, height * .55);
  vertex(width * .095, height * .5);
  vertex(width * .105, height * .5);
  vertex(width * .105, height * .55);
  endShape(CLOSE);
  noStroke();
  fill(255, 255, 255);
  beginShape();
  vertex(width * .195, height * .55);
  vertex(width * .195, height * .5);
  vertex(width * .205, height * .5);
  vertex(width * .205, height * .55);
  endShape(CLOSE);
  
}


function drawRightcake(){
   //right cake
  noStroke();
  fill(255, 255, 255);
  beginShape();
  vertex(width * .8, height * 1);
  vertex(width * .8, height * .98);
  vertex(width * .9, height * .98);
  vertex(width * .9, height * 1);
  endShape(CLOSE);
  
   noStroke();
  fill(255, 255, 255);
     beginShape();
  vertex(width * .84, height * 1);
  vertex(width * .84, height * .8);
  vertex(width * .86, height * .8);
  vertex(width * .86, height * 1);
  endShape(CLOSE);
  
  noStroke();
  fill(255, 255, 255);
     beginShape();
  vertex(width * .72, height * .8);
  vertex(width * .72, height * .78);
  vertex(width * .98, height * .78);
  vertex(width * .98, height * .8);
  endShape(CLOSE);
  
   noStroke();
  fill(245, 213, 157);
     beginShape();
  vertex(width * .74, height * .78);
  vertex(width * .96, height * .78);
  vertex(width * .96, height * .55);
  vertex(width * .74, height * .55);
  endShape(CLOSE);
  
}

function drawRightcandles(){
   //right candles
  noStroke();
  fill(255, 255, 255);
  beginShape();
  vertex(width * .845, height * .55);
  vertex(width * .845, height * .5);
  vertex(width * .855, height * .5);
  vertex(width * .855, height * .55);
  endShape(CLOSE);
  noStroke();
  fill(255, 255, 255);
  beginShape();
  vertex(width * .795, height * .55);
  vertex(width * .795, height * .5);
  vertex(width * .805, height * .5);
  vertex(width * .805, height * .55);
  endShape(CLOSE);
  noStroke();
  fill(255, 255, 255);
  beginShape();
  vertex(width * .895, height * .55);
  vertex(width * .895, height * .5);
  vertex(width * .905, height * .5);
  vertex(width * .905, height * .55);
  endShape(CLOSE);
  
}


function drawMiddlestand(){
   //middle stand
  noStroke();
  fill(255, 255, 255);
  beginShape();
  vertex(width * .43, height * 1);
  vertex(width * .43, height * .98);
  vertex(width * .57, height * .98);
  vertex(width * .57, height * 1);
  endShape(CLOSE);
  
   noStroke();
  fill(255, 255, 255);
  beginShape();
  vertex(width * .48, height * 1);
  vertex(width * .48, height * .72);
  vertex(width * .52, height * .72);
  vertex(width * .52, height * 1);
  endShape(CLOSE);
  
  noStroke();
  fill(255, 255, 255);
  beginShape();
  vertex(width * .32, height * .72);
  vertex(width * .32, height * .7);
  vertex(width * .68, height * .7);
  vertex(width * .68, height * .72);
  endShape(CLOSE);
}

function drawCakebottom(){
   //cake bottom
  noStroke();
  if (mouseIsPressed) {
  fill(43, 121, 135);
   } else {
  fill(245, 166, 227);
   }
  beginShape();
  vertex(width * .35, height * .7);
  vertex(width * .35, height * .53);
  vertex(width * .65, height * .53);
  vertex(width * .65, height * .7);
  endShape(CLOSE);
}

function drawCakemiddle(){
   //cake middle
  noStroke();
  if (mouseIsPressed) {
  fill(55, 179, 168);
   } else {
  fill(245, 166, 227);
   }
  beginShape();
  vertex(width * .38, height * .53);
  vertex(width * .38, height * .35);
  vertex(width * .62, height * .35);
  vertex(width * .62, height * .53);
  endShape(CLOSE);
}

function drawCaketop(){
   //cake top
  noStroke();
  if (mouseIsPressed) {
  fill(107, 184, 191);
   } else {
  fill(245, 166, 227);
   }
  beginShape();
  vertex(width * .41, height * .35);
  vertex(width * .41, height * .2);
  vertex(width * .59, height * .2);
  vertex(width * .59, height * .35);
  endShape(CLOSE);
}

function drawCandleflames(){
    //candle flames
  noStroke();
  fill(255, 184, 61);
  beginShape();
  circle(width * .15, height * .48, height * .02);
  endShape(CLOSE);
  noStroke();
  fill(252, 240, 68);
  beginShape();
  circle(width * .15, height * .475, height * .02);
  endShape(CLOSE);
  
    noStroke();
  fill(255, 184, 61);
  beginShape();
  circle(width * .1, height * .48, height * .02);
  endShape(CLOSE);
  noStroke();
  fill(252, 240, 68);
  beginShape();
  circle(width * .1, height * .475, height * .02);
  endShape(CLOSE);
  
      noStroke();
  fill(255, 184, 61);
  beginShape();
  circle(width * .2, height * .48, height * .02);
  endShape(CLOSE);
  noStroke();
  fill(252, 240, 68);
  beginShape();
  circle(width * .2, height * .475, height * .02);
  endShape(CLOSE);
  
  noStroke();
  fill(255, 184, 61);
  beginShape();
  circle(width * .85, height * .48, height * .02);
  endShape(CLOSE);
  noStroke();
  fill(252, 240, 68);
  beginShape();
  circle(width * .85, height * .475, height * .02);
  endShape(CLOSE);
  
  noStroke();
  fill(255, 184, 61);
  beginShape();
  circle(width * .8, height * .48, height * .02);
  endShape(CLOSE);
  noStroke();
  fill(252, 240, 68);
  beginShape();
  circle(width * .8, height * .475, height * .02);
  endShape(CLOSE);
  
  noStroke();
  fill(255, 184, 61);
  beginShape();
  circle(width * .9, height * .48, height * .02);
  endShape(CLOSE);
  noStroke();
  fill(252, 240, 68);
  beginShape();
 circle(width * .9, height * .475, height * .02);
  endShape(CLOSE);
}