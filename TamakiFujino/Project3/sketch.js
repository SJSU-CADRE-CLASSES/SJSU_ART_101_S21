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
}

function draw() {
  //! meaning NOT
background(245,245,220, 0.5);
  //strokeWeight(strokeWidth);

  // noiseOffset += 0.05;
  // strokeWidth = noise(noiseOffset) * 100;

  // stroke(map(mouseX, 0, 600, 0, 255, true), map(mouseX, 0, 600, 0, 100, true), map(mouseX, 0, 600, 0, 255, true));
  // line(mouseX, mouseY, pmouseX, pmouseY);

}

function keyTyped() {

  if (key === 's') {
    //save this image
    saveCanvas('fileName', 'png');

  } else if (key === 'e') {
    noteC.play();
    fill(229,50,56)
    noStroke();
    ellipse(random(0, width), random(0, height), 50, 50);


  }  else if (key === 'r') {
    noteD.play();
    fill(255,136,51)
    noStroke();
    ellipse(random(0, width), random(0, height), 50, 50);


  } else if (key === 't') {
    noteE.play();
    fill(255,204,51)
    noStroke();
    ellipse(random(0, width), random(0, height), 50, 50);


  } else if (key === 'y') {
    noteF.play();
    fill(0,175,129)
    noStroke();
    ellipse(random(0, width), random(0, height), 50, 50);


  } else if (key === 'u') {
    noteG.play();
    fill(97,179,222);
    noStroke();
    ellipse(random(0, width), random(0, height), 50, 50);


  } else if (key === 'i') {
    noteA.play();
    fill(0,126,229);
    noStroke();
    ellipse(random(0, width), random(0, height), 50, 50);


  } else if (key === 'o') {
    noteB.play();
    fill(102,92,190)
    noStroke();
    ellipse(random(0, width), random(0, height), 50, 50);

  } else if (key === 'p') {
    noteCC.play();
    fill(255,76,82)
    noStroke();
    ellipse(random(0, width), random(0, height), 50, 50);

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
