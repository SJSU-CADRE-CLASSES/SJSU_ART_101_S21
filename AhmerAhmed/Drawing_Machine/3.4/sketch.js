//A prompt is given to the user to draw something. An image is included, but only shown for a few seconds then the end drawing is all up to the user. No restrictions to the drawing, can be literal or figurative.
//click a key to use an eraser
  //eraser is just stroke colored white and stroke size increased

var song;
let edm = [];
let lofi = [];
let rando;
let randoSong;
var counter = 0;

function preload(){
  //edm songs preloaded
  fears = loadSound(`edm/Fears.mp3`);
  lion = loadSound(`edm/Lionhearted.mp3`);
  mother = loadSound(`edm/Mother.mp3`);
  prince = loadSound(`edm/Prince.mp3`);
  shelter = loadSound(`edm/Shelter.mp3`);

  //edm images
  for(let i = 1; i<=3; i++){
    edm[i] = loadImage(`edm/edm${i}.jpg`);
  }

  //lofi songs preloaded
  bunny = loadSound(`lofi/BunnyGirl.mp3`);
  cafe = loadSound(`lofi/Cafe.mp3`);
  fukashigi = loadSound(`lofi/Fu.mp3`);
  kairi = loadSound(`lofi/Kairi.mp3`);
  kingdom = loadSound(`lofi/Kingdom.mp3`);

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
  text("Click 'f' to load the free draw.", width/2.85, height/1.5);
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
    musicStop();
    randoSong = int(random(1,6));
    if(randoSong == 1){
      push();
      fill(255, 128, 234);
      textSize(18);
      text("Now playing: a simple bunny girl.", width/100, height/20);
      pop();
      bunny.play();
    }if(randoSong == 2){
      push();
      fill(255, 128, 234);
      textSize(18);
      text("Now playing: Walking in the Rain to a Cafe to Write Down Private Thoughts in Public.", width/100, height/20);
      pop();
      cafe.play();
    }if(randoSong == 3){
      push();
      fill(255, 128, 234);
      textSize(18);
      text("Now playing: Fukashigi no Carte but is it okay if it's lofi?.", width/100, height/20);
      pop();
      fukashigi.play();
    }if(randoSong == 4){
      push();
      fill(255, 128, 234);
      textSize(18);
      text("Now playing: Kairi.", width/100, height/20);
      pop();
      kairi.play();
    }if(randoSong == 5){
      push();
      fill(255, 128, 234);
      textSize(18);
      text("Now playing: Kingdom.", width/100, height/20);
      pop();
      kingdom.play();
    }
    lofiSelection();
  }
  //calls the edm stuff
  if (key == 'm'){
    clear();
    background(15,15,15);
    musicStop();
    randoSong = int(random(1,6));
    if(randoSong == 1){
      push();
      fill(255, 128, 234);
      textSize(18);
      text("Now playing: Face my Fears.", width/100, height/20);
      pop();
      fears.play();
    }if(randoSong == 2){
      push();
      fill(255, 128, 234);
      textSize(18);
      text("Now playing: Lionhearted.", width/100, height/20);
      pop();
      lion.play();
    }if(randoSong == 3){
      push();
      fill(255, 128, 234);
      textSize(18);
      text("Now playing: Mother.", width/100, height/20);
      pop();
      mother.play();
    }if(randoSong == 4){
      push();
      fill(255, 128, 234);
      textSize(18);
      text("Now playing: The Prince.", width/100, height/20);
      pop();
      prince.play();
    }if(randoSong == 5){
      push();
      fill(255, 128, 234);
      textSize(18);
      text("Now playing: Shelter.", width/100, height/20);
      pop();
      shelter.play();
    }/*
    if(fears.isPlaying()){
      lion.stop();
      mother.stop();
      prince.stop();
      shelter.stop();
    }else{
      randoSong = int(random(2,6));
      }if(randoSong == 2){
        lion.play();
      }if(randoSong == 3){
        mother.play();
      }if(randoSong == 4){
        prince.play();
      }if(randoSong == 5){
        shelter.play();
      }
    if(lion.isPlaying()){
      fears.stop();
      mother.stop();
      prince.stop();
      shelter.stop();
    }else{
      randoSong = int(random(1,6));
      if(randoSong == 2){
        randoSong = int(random(1,6));
      }
      if(randoSong == 1){
        fears.play();
      }if(randoSong == 3){
        mother.play();
      }if(randoSong == 4){
        prince.play();
      }if(randoSong == 5){
        shelter.play();
      }
    }
    if(mother.isPlaying()){
      fears.stop();
      lion.stop();
      prince.stop();
      shelter.stop();
    }else{
      randoSong = int(random(1,6));
      if(randoSong == 3){
        randoSong = int(random(1,6));
      }
      if(randoSong == 1){
        fears.play();
      }if(randoSong == 2){
        lion.play();
      }if(randoSong == 4){
        prince.play();
      }if(randoSong == 5){
        shelter.play();
      }
    }
    if(prince.isPlaying()){
      fears.stop();
      lion.stop();
      mother.stop();
      shelter.stop();
    }else{
      randoSong = int(random(1,6));
      if(randoSong == 4){
        randoSong = int(random(1,6));
      }
      if(randoSong == 1){
        fears.play();
      }if(randoSong == 2){
        lion.play();
      }if(randoSong == 3){
        mother.play();
      }if(randoSong == 5){
        shelter.play();
      }
    }
    if(shelter.isPlaying()){
      fears.stop();
      lion.stop();
      mother.stop();
      prince.stop();
    }else{
      randoSong = int(random(1,6));
      if(randoSong == 5){
        randoSong = int(random(1,6));
      }
      if(randoSong == 1){
        fears.play();
      }if(randoSong == 2){
        lion.play();
      }if(randoSong == 3){
        mother.play();
      }if(randoSong == 4){
        prince.play();
      }
    }*/
    edmSelection();
  }
  if (key == 'f'){
    clear();
    background(15,15,15);
    musicStop();
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

function musicStop(){
  fears.stop();
  lion.stop();
  mother.stop();
  prince.stop();
  shelter.stop();
  bunny.stop();
  cafe.stop();
  fukashigi.stop();
  kairi.stop();
  kingdom.stop();
}
