
let array = []
let noiseOffset = 0.0;
let strokeWidth = 6;
let lineColorR = 0;
let lineColorG = 0;
let lineColorB = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(60,179,113);



  noFill();

}

function draw() {
push();
drawGrid();
pop();

  // background(60,179,113, 5);
  background (255, 255, 255, 0);
  strokeWeight(strokeWidth);

  noiseOffset += 0.05;
  // strokeWidth = noise(noiseOffset) * 100;

  if (keyIsPressed){
    lineColorR = random(0, 255);
    lineColorG = random(0, 255);
    lineColorB = random(0, 255);
  }

  if (mouseIsPressed){
    // stroke(map(mouseX, 0, 600, 0, 255, true))
    // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
    stroke(lineColorR, lineColorG, lineColorB);
  }





}


function drawGrid(){
  strokeWeight(1);
  stroke(200,200,200);
  numCells = 20;

  for (i = 0; i <= width; i  += width/ numCells){
      for (let j = 0; j <= height; j += height / numCells){
    rect(i, j ,  width / numCells, height / numCells)

      }
    // rect(i, 50,  width / numCells, height / numCells)

  }

}


function keyTyped(){

 if (key == 's'){
   //save this image
   saveCanvas('fileName', 'png');
 } else if (key == 'c'){
clear();

beginShape();
  for(let i = 0; i < array.length; i++){
  // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
  curveVertex (array[i][0], array[i][1])
}

endShape();


 }

return false;

}
