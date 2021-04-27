//A prompt is given to the user to draw something. An image is included, but only shown for a few seconds then the end drawing is all up to the user. No restrictions to the drawing, can be literal or figurative.
//click a key to use an eraser
  //eraser is just stroke colored white and stroke size increased

var song;
let edm = [];
let lofi = [];
let rando;
var counter = 0;

function preload(){
  //edm songs preloaded
  edmSong = loadSound(`edm/edmbeat.mp3`);

  //edm images
  for(let i = 1; i<=3; i++){
    edm[i] = loadImage(`edm/edm${i}.jpg`);
  }

  //lofi songs preloaded
  lofiSong = loadSound(`lofi/lofibeat.mp3`);

  //lofi images
  for(let i = 1; i<=3; i++){
    lofi[i] = loadImage(`lofi/lofi${i}.jpg`)
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(15,15,15);
  stroke(250);
  noFill();

  push();
  fill(0);
  textSize(40);
  text("Click 'l' to load the lofi selection.", width/3, height/3);
  text("Click 'm' to load the edm selection.", width/3.15, height/2);
  pop();
}

function draw() {
  if (mouseIsPressed == true){
    line(mouseX, mouseY, pmouseX, pmouseY);
    //causes reflection of the line, can be used for a prompt?    (line(width-mouseX, height-mouseY, width-pmouseX, height-pmouseY);)
  }
}

function keyTyped(){
  //saves the canvas
  if (key == 's'){
    saveCanvas('Name_This_File_Something_-__-', 'png');
  }
  //creates an eraser
  if (key == 'e'){
    stroke(15);
    strokeWeight(10);
  }
  //uses the "pen" to continue drawing
  if (key == 'p'){
    stroke(250);
    strokeWeight(1);
  }
  //ends the drawing clearing the board
  if (key == 'd'){
    clear();
    background(15,15,15);
  }
  //calls the grinds to show
  if (key == 'g'){
    drawGrid();
  }
  //0-5 change the pen size
  if (key == '0'){
    stroke(250);
    strokeWeight(1);
  }
  if (key == '1'){
    stroke(250);
    strokeWeight(10);
  }
  if (key == '2'){
    stroke(250);
    strokeWeight(20);
  }
  if (key == '3'){
    stroke(250);
    strokeWeight(30);
  }
  if (key == '4'){
    stroke(250);
    strokeWeight(40);
  }
  if (key == '5'){
    stroke(250);
    strokeWeight(50);
  }
  //calls the lofi stuff
  if (key == 'l'){
    clear();
    background(15,15,15);
    lofiSong.play();
    lofiSelection();
  }
  //calls the edm stuff
  if (key == 'm'){
    clear();
    background(15,15,15);
    edmSong.play();
    edmSelection();
  }
}

function drawGrid(){
  numCells = 20;
  for(let i = 0; i <= width; i += width/numCells){
    for(let j = 0; j <= height; j += height/numCells){
      rect(i, j, width/numCells, height/numCells);
    }
  }
}

function lofiSelection(){
  rando = int(random(1,4));
  image(lofi[rando], width/1.4, height/15);
  //lofi.splice(rando,1);
}

function edmSelection(){
  rando = int(random(1,4));
  image(edm[rando], width/1.4, height/15)
}
