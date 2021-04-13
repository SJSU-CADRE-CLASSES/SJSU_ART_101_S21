let array = [];
let button;



function preload(){
  song = loadSound('asset/bunnytime.mp3');
}




function setup() {
  createCanvas(600, 650);
  background(212,205,221);
  bg = loadImage('asset/sparklerose.jpg');
  bg1= loadImage('asset/canvas.jpg');
  song.loop();
  stroke('#908898');
  strokeWeight(2);
  noFill();
  button2 = select("#restart");
  button2.class("restart");
}

function draw() {

  if (mouseIsPressed){

    background(bg);
    // line(mouseX, mouseY, pmouseX, pmouseY);
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
