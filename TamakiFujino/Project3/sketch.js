let array = [];
let noiseOffset = 0.0;
let backgroundColor = 200;
let noteC;
let noteD;
let noteE;
let noteF;
let noteG;
let noteA;
let noteB;
let noteCC;
let mic;
let a;


function setup() {
  createCanvas(500, 300);
  // drawGrid();
  noteC = loadSound('assets/C.mp3');
  noteD = loadSound('assets/D.mp3');
  noteE = loadSound('assets/E.mp3');
  noteF = loadSound('assets/F.mp3');
  noteG = loadSound('assets/G.mp3');
  noteA = loadSound('assets/A.mp3');
  noteB = loadSound('assets/B.mp3');
  noteCC = loadSound('assets/CC.mp3');

  noFill();
   a = height / 2;

  // Create an Audio input
 mic = new p5.AudioIn();

 // start the Audio Input.
 // By default, it does not .connect() (to the computer speakers)
 mic.start();
}

function draw() {
  //! meaning NOT
background(245,245,220, 0.5);

  //strokeWeight(strokeWidth);

  // noiseOffset += 0.05;
  // strokeWidth = noise(noiseOffset) * 100;

  // stroke(map(mouseX, 0, 600, 0, 255, true), map(mouseX, 0, 600, 0, 100, true), map(mouseX, 0, 600, 0, 255, true));
  // line(mouseX, mouseY, pmouseX, pmouseY);

  // // Get the overall volume (between 0 and 1.0)
  //   let vol = mic.getLevel();
  //   // Draw an ellipse with height based on volume
  // let h = map(vol, 0, 0.5, 0, 30);
  // // ellipse(random(0,width), h - 25, 50, 50);
}

function keyTyped() {

let vol = mic.getLevel();
let h = map(vol, 0, 0.5, 0, 30);

  if (key === 's') {
    //save this image
    saveCanvas('fileName', 'png');

  } else if (key === 'e') {
    noteC.play();
    stroke(229,50,56);
    for (var y=0; y<=random(0,height); y++){
var x=random(random(0,width), random(0,width));
     ellipse(x,y,1,1);
     line(x,y,random(0,width),random(0,height));
   }


  }  else if (key === 'r') {
    noteD.play();
    stroke(255,136,51)
    for (var y=0; y<=random(0,height); y++){
var x=random(random(0,width), random(0,width));
     ellipse(x,y,1,1);
    line(x,y,random(0,width),random(0,height));
   }


  } else if (key === 't') {
    noteE.play();
    stroke(255,204,51);
    for (var y=0; y<=random(0,height); y++){
var x=random(random(0,width), random(0,width));
     ellipse(x,y,1,1);
     line(x,y,random(0,width),random(0,height));
   }


  } else if (key === 'y') {
    noteF.play();
    stroke(0,175,129);
    for (var y=0; y<=random(0,height); y++){
var x=random(random(0,width), random(0,width));
     ellipse(x,y,1,1);
    line(x,y,random(0,width),random(0,height));
   }


  } else if (key === 'u') {
    noteG.play();
    stroke(97,179,222);
    for (var y=0; y<=random(0,height); y++){
var x=random(random(0,width), random(0,width));
     ellipse(x,y,1,1);
    line(x,y,random(0,width),random(0,height));
}

  } else if (key === 'i') {
    noteA.play();
    stroke(0,126,229);
    for (var y=0; y<=random(0,height); y++){
var x=random(random(0,width), random(0,width));
     ellipse(x,y,1,1);
    line(x,y,random(0,width),random(0,height));
}

  } else if (key === 'o') {
    noteB.play();
    stroke(102,92,190);
    for (var y=0; y<=random(0,height); y++){
var x=random(random(0,width), random(0,width));
     ellipse(x,y,1,1);
    line(x,y,random(0,width),random(0,height));
}
  } else if (key === 'p') {
    noteCC.play();
    stroke(255,76,82);
    for (var y=0; y<=random(0,height); y++){
var x=random(random(0,width), random(0,width));
     ellipse(x,y,1,1);
    line(x,y,random(0,width),random(0,height));
}
  } else if (key === 'c') {
    clear();
  }
  return false;
}

// function drawGrid() {
//
//   numCells = 20;
//   fillColor = 255;
//
//   strokeWeight(0);
//
//   for (let i = 0; i <= width; i += width / numCells) {
//     for (let j = 0; j <= height; j += height / numCells) {
//       if (fillColor === 255) {
//         fillColor = 200;
//       } else {
//         fillColor = 255;
//       }
//       fill(fillColor);
//       rect(i, j, width / numCells, height / numCells);
//     }
//   }
//   strokeWeight(5);
// }
