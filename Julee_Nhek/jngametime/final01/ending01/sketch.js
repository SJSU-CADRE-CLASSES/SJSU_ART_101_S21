let bg;
let frenchiedating;
let terry;
let time;
let replay;





let posX = 0;
let posY = 0;


function preload() {
  song = loadSound("assets/dreamalittle.mp3");
  bg = loadImage("assets/endingdate.png");
  frenchiedating = loadImage("assets/frenchiedate.png");
  terry = loadImage("assets/boston.png");
  time = loadImage("assets/time.png");
  replay = loadImage("assets/replay.png")


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
  image(frenchiedating, 170, 260, 350, 250);
  image(terry, 720, 290, 300, 200);
  image(time, posX, 20, 60, 50);

    posX += 1;
    posY += 1;

  if (posX > 1000) {
    background(53, 70, 57);
    fill(255);
    textSize(25);
    text('"I’m one classy mother pupper"', 350, 50);

    image(replay, 450, 210, 150, 120);
    text('Play Again', 450, 380);
    textSize(10);
    text('Song: Dream a Little Dream - The Von Trapps & Pink Martini', 120, 480);


}

}
