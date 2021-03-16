  let myValue = 5;
  let mic;
  let waves = [];
  let waveHeight = 15;
  let waveVariable = 30;
  let waveLength = 30;

function setup() {
  createCanvas(600, 120);
  mic = new p5.AudioIn();
  mic.start();
  
  //create a lot of lines of wave
  //(r,g,b, xPos,yPos)
  for (let i =  0; i <=16; i++) {
  waves[i] = new Wave(100+i*10,100-i*10,random(150,255), i*30, i*7);
  } 
}

function draw() {
  background(255);
  
  //change the waveHeight with mic-input
  waveHeight = map(mic.getLevel(), 0,0.2,0,150);
  
  //display and move wave.js 
  for (i=0; i < waves.length; i++){
    waves[i].display();
    waves[i].move();
  }
  pearl(40,255);
}

function mousePressed() {
//return to the initial value when you click the pearl
  if (mouseX > width*0.45 && mouseX < width*0.55 && mouseY > height*0.4 && mouseY < height*0.6){
    waveLength = 30;
    waveVariable = 30;
    //change the wave shape based on mouseX and mouseY
  } else if (mouseX >= width*0.5){
    waveLength = mouseY;
  } else if (mouseX < width*0.5) {
      waveVariable = mouseX;
    }
}

 
function pearl(pHeight,pColor){
  fill(pColor);
  noStroke();
  circle(width/2, height/2, pHeight);
}
