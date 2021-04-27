function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20, 250, 20);

  drawGrid();
}

function draw() {

  background(20, 250, 20, 1);
  strokeWeight(3);

   if (mouseIsPressed) {
     line(mouseX, mouseY, pmouseX, pmouseY);

   }
    else {}
}

function drawGrid(){
    numCells = 20;

    for (let i = 0; i <= width; i += width / numCells) {
      for (let j = 0; j <= height; j += height / numCells){
        rect(i, j, width / numCells, height / numCells);
      }
    }
}


function keyTyped(){

  if (key === 'c') {
    //clear image
    clear();
  }


  return false;
}
