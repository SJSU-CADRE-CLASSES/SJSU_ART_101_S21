let bg;
let frenchie2;
let dream;
let zzz;
let time;
let express;
let vespa;



let posX = 0;
let posY = 0;


function preload() {
  song = loadSound("assets/lazywalk.mp3");
  bg = loadImage("assets/airplane.png");
  frenchie2 = loadImage("assets/sleepydog.png");
  zzz = loadImage("assets/zzz.png");
  dream = loadImage("assets/dreambubble.png");
  time = loadImage("assets/time.png");
  express = loadImage("assets/express.png")
  vespa = loadImage("assets/vespa.png")

}

function setup() {
  createCanvas(1000, 500);
  textFont("Fredericka the Great");
  song.loop();
}

function draw() {

  background(53, 70, 57);
  lvl1();



}


function lvl1() {

  image(bg, 1, 1, 1000, 500);
  image(frenchie2, 530, 300, 300, 200);
  image(zzz, 620, 240, 100, 100);
  image(dream, 300, 40, 300, 300);
  image(time, posX, 450, 60, 50);

  posX += 1;
  posY += 1;

  if (posX > 1000) {
    background(53, 70, 57);
    fill(255);
    textSize(20);
    text('You woke up from a long nap and made it to your destination.', 230, 50);
    text('Which transporation do you use to go to the eiffel tower?', 250, 70);

    image(express, 150, 180, 300, 200);
    text('Metro', 280, 410);
    image(vespa, 530, 180, 300, 200);
    text('Vespa', 660, 410);

  }

}
