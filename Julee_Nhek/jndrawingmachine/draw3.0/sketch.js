let array = [];

function setup() {
  createCanvas(600, 600);
  background(212,205,221);
  bg = loadImage('asset/sparklerose.jpg');
  bg1= loadImage('asset/canvas.jpg');

  stroke('#908898');
  strokeWeight(2);
  noFill();
}

function draw() {

  if (mouseIsPressed){
    // line(mouseX, mouseY, pmouseX, pmouseY);
    background(bg);
    array.push([mouseX, mouseY]);

  }

}

function keyTyped(){

  if (key === 's'){
    // save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'd'){
     //display image
     background(bg1);

     beginShape();
     for(let i = 0; i < array.length; i++){
     // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
     curveVertex(array[i][0], array[i][1])
     }
     endShape();


  }

  return false;
}
