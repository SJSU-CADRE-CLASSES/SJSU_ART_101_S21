let w = 5;
let bkg = 240;
let noiseOffset = 0.0;
// let g;
// let array = [];

function setup() {
  createCanvas(windowWidth*0.625, windowHeight*0.625);
  // createCanvas(600, 600);
  // background(200,200,200);
  background(bkg);

  drawGrid();


  // strokeWeight(w);
  noFill();
}

function draw() {

  loadPixels();

  for (var y = 0; y < height; y++){
    for (var x = 0; x < width; x++){
      var index = (x + y * width) * 16;
      pixels[index + 0] = x;
      pixels[index + 1] = 0;
      pixels[index + 2] = y;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();

  if (mouseIsPressed){
    background(bkg,bkg,bkg, 0);
    strokeWeight(w);

    // noiseOffset += 0.05;
    // w = noise(noiseOffset) * 100;



    // stroke(map(mouseX, 0, width, 0, 255, true));
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
    // background(0);
    // array.push([mouseX, mouseY]);
  }




}

function keyTyped(){

  console.log(`key ${key} is being typed`);

  if (key === 's') {
    // save this image
    saveCanvas('fileName', 'jpg');

  } else if (key === ']') {
    // INCREASE stroke width
    w = w + 3;
    strokeWeight(w);

  } else if (key === '[') {
    // DECREASE stroke width
    w = w - 3;
    strokeWeight(w);

  } else if (key === 'c') {
    //CLEAR Canvas
    clear();
    background(bkg);
    drawGrid();

  }
//..........................................................
  // else if (key === 'e'){
  //   // Eraser
  //   stroke(bkg);
  //
  // } else if (key === 'b'){
  //   // DRAW CONT.
  //   stroke(0);
  // }

//..........................................................
  // else if (key === '1') {
  //   // guide y display
  //   push();
  //   stroke(152, 247, 250);
  //   strokeWeight(1);
  //   line(width*0.5, height*0, width*0.5, height*1);
  //   pop();
  //
  // } else if (key === '2') {
  //   // guide x display
  //   push();
  //   stroke(152, 247, 250);
  //   strokeWeight(1);
  //   line(width*0, height*0.5, width*1, height*0.5);
  //   pop();
  // }


  //   else if (key === 'd') {
  //   // display image
  //
  //   background(240);
  //   beginShape();
  //   for (let i = 0; i < array.length; i++){
  //     // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
  //     curveVertex(array[i][0], array[i][1])
  //   }
  //   endShape();
  //
  // }

  return false;
}

function drawGrid(){
  numCells = 20;
  fillColor = 255;
  strokeWeight(0);

  for (let i = 0; i <= width; i += width / numCells){
    for (let j = 0; j <= height; j += width / numCells){
      if (fillColor === 255){
        fillColor = 220;
      } else {
        fillColor = 255;
      }
      fill(fillColor);
      rect(i, j, width / numCells, height / numCells);
    }
  }
  strokeWeight(w);
}


// function mousePressed() {
//   array = [];
//   bkg = 240;
// }



//..........................................................

//SHOULD use class to show, hide guideline



// stroke(map(mouseX, 0, width, 0, 255, true));
// line(mouseX, mouseY, pmouseX, pmouseY);

// line(mouseY, mouseX, pmouseY, pmouseX);

// stroke(150,255,150);
// line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);

// line(height - mouseY, width - mouseX, height - pmouseY,  width - pmouseX);

// stroke(255,150,150);
// line(height - mouseY, mouseX, height - pmouseY, pmouseX);

// line( width - mouseX, mouseY, width - pmouseX, pmouseY);

// stroke(150,150,255);
// line( mouseY, width - mouseX, pmouseY, width - pmouseX);

// line(mouseX, height - mouseY, pmouseX, height - pmouseY);
