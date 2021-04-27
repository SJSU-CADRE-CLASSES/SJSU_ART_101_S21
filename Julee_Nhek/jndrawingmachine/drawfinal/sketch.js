let array = [];
let button;

var x = 0;
var y = 0;
var stepSize = 5.0;

var font = 'Clicker Script';
var letters = 'How to draw a pretty rose 101. Do not worry if you cannot draw because there is alway a start over button >;D';
var fontSizeMin = 3;
var angleDistortion = 0.0;

var counter = 0;


function preload(){
  song = loadSound('asset/bunnytime.mp3');
}





function setup() {
  createCanvas(600, 650);
  background(212,205,221);

  cursor(CROSS);

    x = mouseX;
    y = mouseY;

    textFont(font);
    textAlign(LEFT);
    fill(0);




  bg = loadImage('asset/sparklerose.jpg');
  bg1= loadImage('asset/canvas.jpg');

  song.loop();

  stroke('#c21e56');
  strokeWeight(1);
  noFill();
  button2 = select("#restart");
  button2.class("restart");
}

function draw() {

  if (mouseIsPressed){

    // background(bg);
    // line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);


    if (mouseIsPressed && mouseButton == LEFT) {
    var d = dist(x, y, mouseX, mouseY);
    textSize(fontSizeMin + d / 2);
    var newLetter = letters.charAt(counter);
    stepSize = textWidth(newLetter);

    if (d > stepSize) {
      var angle = atan2(mouseY - y, mouseX - x);

      push();
      translate(x, y);
      rotate(angle + random(angleDistortion));
      text(newLetter, 0, 0);
      pop();

      counter++;
      if (counter >= letters.length) counter = 0;

      x = x + cos(angle) * stepSize;
      y = y + sin(angle) * stepSize;
    }
  }
  }


}


function mousePressed() {
  x = mouseX;
  y = mouseY;
}



function keyPressed() {
  // angleDistortion ctrls arrowkeys up/down
  if (keyCode == UP_ARROW) angleDistortion += 0.1;
  if (keyCode == DOWN_ARROW) angleDistortion -= 0.1;
  //red
  if (key == '1') stroke('#c21e56');
  //pink
  if (key == '2') stroke('#fbcce7');
  //green
  if (key == '3') stroke('#3eb489');
  //gray
  if (key == '4') stroke('#a6a6a6');
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
