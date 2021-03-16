let movingMouth;
let mic;
let micLevel;
let bkg1;
let bkg2;
let bkg3;
let horns;
let ears;
let face;
let nose;
let mouth;
let eyes;
let pupils;
let pupilLight;
let eyebrown;
let snows = [];
let leaf = [];
let ocean1;
let ocean2;
let ocean3;
let flower =[];


function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);

  mic = new p5.AudioIn();
  mic.start();
  
  for(let i = 0; i<= 15; i++){
    snows[i] = new Snow(random(1,10) * width * 0.1, random(1,10) * width * 0.1, random (0.1));  
  }
  
  for(let i = 0; i<= 15; i++){
    leaf[i] = new Leaf(random(1,10) * width * 0.1, random(1,10) * width * 0.1, random (0.15),random(30) * width * 0.1);  
  }
  
  ocean1 = new Ocean(width * 0.25,height * 0.65);
  ocean2 = new Ocean(width * 0.05,height * 0.7);
  ocean3 = new Ocean(width * -0.1,height * 0.8);
  

  for(let i = 0; i<= 10; i++){
    flower[i] = new Flower(random(1,10) * width * 0.1, random(1,10) * width * 0.1,random(0.05),random(1,10) * width * 0.1);
  }

  
}

function draw() {
  // console.log("mouse x is: " + mouseX);
  // console.log("mouse y is: " + mouseY);
  // console.log("mic level is: " + mic.getLevel())
  
//.........................hover to change background, hover outside to back to normal......................

  micLevel = mic.getLevel();

  movingMouth = map(mic.getLevel(), 0, 0.1, 0, 20, true);
  movingEyebrow = map(mic.getLevel(), 0, 5, 0, 15, true);
  scalingUp = map(mic.getLevel(), 0, 10, 1, 15, true);
  

  horns = new Horns();
  ears = new Ears(mic.getLevel() * 50);
  face = new Face();
  nose = new Nose();
  mouth = new Mouth(movingMouth);
  eyes = new Eyes();
  pupils = new Pupils(scalingUp);
  pupilLight = new PupilLight(scalingUp);
  eyebrown = new Eyebrown(movingEyebrow * 25);
  

// .........................................start to draw here.........................................
  
  background(156, 59, 30);
  background(bkg1, bkg2, bkg3);
  noStroke();

// .........................................drawBackground.........................................
    if (mouseX < width * .5 && mouseX > width * .0 && mouseY > width * .5 && mouseY < width * 1.0) {
      for (i = 0; i < snows.length; i++){
        snows[i].display(130,170);
        snows[i].move();
      }
    } else if (mouseX > width * .5 && mouseX < width * 1.0 && mouseY > width * .5 && mouseY < width * 1.0) {
      for (i = 0; i < leaf.length; i++){
        leaf[i].display(212, 120, 55,255);
        leaf[i].move(0,0);
      }
      for (i = 0; i < leaf.length; i= i + 5){
        leaf[i].display(143, 42, 17,180);
        leaf[i].move(2,5);
      }
    } else if (mouseX > width * .5 && mouseX < width * 1.0 && mouseY < width * .5 && mouseY > width * .0) {
      fill(25, 103, 148);
      ocean1.display();
      ocean1.move();
      fill(53, 144, 196);
      ocean2.display();
      ocean2.move();
      fill(101, 194, 247);
      ocean3.display();
      ocean3.move();
      
    } else if (mouseX < width * .5 && mouseX > width * .0 && mouseY < width * .5 && mouseY > width * .0) {
      for (i = 0; i < flower.length; i++){
        flower[i].display(255, 212, 255);
        flower[i].move(0);
      }
      for (i = 0; i < flower.length; i = i + 3){
        flower[i].display(247, 243, 213);
        flower[i].move(1);
      }

    }
  
    mouseHover();
  
// .........................................draw Horns.........................................
    fill(89, 65, 53);
    horns.display();

// .........................................draw Ears.........................................
    fill(171, 115, 70);
    ears.display();

// .........................................draw Face.........................................
    fill(199, 145, 99);
    face.display();
  
// .........................................draw Mouth.........................................
    fill(166, 120, 81);
    mouth.display();

// .........................................draw Nose.........................................
    fill(199, 78, 69);
    nose.display();
  
// .........................................draw Shadow Face.........................................
    fill(0, 0, 0, 10);
    drawShadowFace1();
    fill(0, 0, 0, 20);
    drawShadowFace2();

// .........................................draw Eyebrown.........................................
    fill(115, 81, 45);
    eyebrown.display();

// .........................................draw Eyes.........................................
    fill(255, 255, 255, 170);
    eyes.display();

// .........................................draw Pupils.........................................
    fill(0);
    pupils.display();

// .........................................draw PupilLight.........................................
    fill(255);
    pupilLight.display()


    fill(255, 255, 255, 30);
    drawHighlight();

    fill(0, 0, 0, 30);
    drawShadowHorn();

}


function mouseHover() {
//.........................hover to change background, hover outside to back to normal......................

  if (mouseX < width * .5 && mouseX > width * .0 && mouseY < width * .5 && mouseY > width * .0) {
    // console.log("mouse beep");
    
//  .........................................SPRING.........................................
    bkg1 = 76;
    bkg2 = 105;
    bkg3 = 52;

  } else if (mouseX > width * .5 && mouseX < width * 1.0 && mouseY < width * .5 && mouseY > width * .0) {
    
//  .........................................SUMMER.........................................
    bkg1 = 247;
    bkg2 = 226;
    bkg3 = 141;

  } else if (mouseX > width * .5 && mouseX < width * 1.0 && mouseY > width * .5 && mouseY < width * 1.0) {
    
//  .........................................FALL.........................................
    bkg1 = 176;
    bkg2 = 82;
    bkg3 = 42;

  } else if (mouseX < width * .5 && mouseX > width * .0 && mouseY > width * .5 && mouseY < width * 1.0) {
    
//  .........................................WINTER.........................................
    bkg1 = 39;
    bkg2 = 73;
    bkg3 = 97;
    
  } else {
    
//  .........................................NORMAL.........................................
    bkg1 = 156;
    bkg2 = 59;
    bkg3 = 30;

  }

}



function drawShadowHorn() {
  beginShape();

  //downleft
  vertex(width * .0, height * .25);
  vertex(width * .1, height * .3);
  vertex(width * .2, height * .4);
  //upleft
  vertex(width * .225, height * .375);
  vertex(width * .125, height * .275);
  vertex(width * .0, height * .225);
  endShape(CLOSE);


  beginShape();
  //downright
  vertex(width * .8, height * .4);
  vertex(width * .9, height * .3);
  vertex(width * 1.0, height * .25);

  //upright
  vertex(width * 1.0, height * .225);
  vertex(width * .875, height * .275);
  vertex(width * .775, height * .375);

  endShape(CLOSE);
}

function drawShadowFace1() {
  beginShape();

  //overface
  vertex(width * .2, height * .4);
  vertex(width * .4, height * .9);
  vertex(width * .6, height * .9);
  vertex(width * .8, height * .4);
  vertex(width * .65, height * .3);
  vertex(width * .55, height * .8);
  vertex(width * .45, height * .8);
  vertex(width * .35, height * .3);

  endShape(CLOSE);
}

function drawShadowFace2() {
  beginShape();

  //overface
  vertex(width * .2, height * .4);
  vertex(width * .4, height * .9);
  vertex(width * .6, height * .9);
  vertex(width * .8, height * .4);
  vertex(width * .775, height * .375);
  vertex(width * .575, height * .85);
  vertex(width * .425, height * .85);
  vertex(width * .225, height * .375);

  endShape(CLOSE);
}

function drawHighlight() {
  beginShape();
  //upleft
  vertex(width * .0, height * .0);
  vertex(width * .1, height * .05);
  vertex(width * .1, height * .15);
  vertex(width * .15, height * .2);
  vertex(width * .2, height * .2);
  vertex(width * .3, height * .1);
  vertex(width * .35, height * .15);
  vertex(width * .3, height * .25);

  //overface1
  vertex(width * .35, height * .3);
  vertex(width * .65, height * .3);

  //upright
  vertex(width * .7, height * .25);
  vertex(width * .65, height * .15);
  vertex(width * .7, height * .1);
  vertex(width * .8, height * .2);
  vertex(width * .85, height * .2);
  vertex(width * .9, height * .15);
  vertex(width * .9, height * .05);
  vertex(width * 1.0, height * .0);

  //downright
  // vertex(width * 1.0, height * .025);
  vertex(width * .925, height * .075);
  vertex(width * .925, height * .175);
  vertex(width * .85, height * .225);
  vertex(width * .8, height * .225);
  vertex(width * .7, height * .125);
  vertex(width * .675, height * .175);
  vertex(width * .725, height * .275);

  //overface2
  vertex(width * .65, height * .325);
  vertex(width * .35, height * .325);

  //downleft
  vertex(width * .275, height * .275);
  vertex(width * .325, height * .175);
  vertex(width * .3, height * .125);
  vertex(width * .2, height * .225);
  vertex(width * .15, height * .225);
  vertex(width * .075, height * .175);
  vertex(width * .075, height * .075);
  // vertex(width * .0, height * .025);
  endShape(CLOSE);
}
