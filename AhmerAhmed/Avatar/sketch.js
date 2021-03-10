//declare mic and miclevel
let mic;
let micLevel;
var z = 0
var w;
var r;
var p;
let x;
let y;
let move = false;
let rain = [];
let bool = false;

//function creates the canvas
function setup() {
  //create the canvas size
  createCanvas(400, 400);

  //angle
  angleMode(degrees)

  //get mic input and assign it
  createButton("Start").mousePressed(startSketch);

  //set values for variables
  x = width;
  y = height;

  //classes being called
  neck = new MyNeck(x, y);
  head = new MyHead(x, y);
  mask = new MyMask(x, y);
  gas = new MyGas(x, y);
  snowflake = new MySnowFlake(x, y );
  eyelid = new MyEyelid(x, y );
  pupils = new MyPupils(x, y );
  halo = new MyHalo(x, y , z, move);

  for(let i = 0; i < 1000; i++){
    rain[i] = new MyRain(x, r = random(0,1),  p = random(1,3), w =                                  random(401, 420), move);
  }
}

function startSketch(){
  mic = new p5.AudioIn();
  mic.start();

  bool = true;
}

//function draws the avatar
function draw() {
  if(bool == true){

    //keeps the background colors constant while eyes and colors are redrawn
    background(20)

    //call raindrops behind mask
    //calls the raindrops
    //change what i is less than in order to change the amount of raindrops
    for(let i = 0; i < 57; i++){
      rain[i].display();
    }

    //made whole image smaller to fit halo
    push();
    translate(x*.05, y*.1)
    scale(.9)

    //calls class neckshape
    neck.display();

    //calls class headshape
    head.display();

    //calls class bluemask
    mask.display();

    //calls class gas
    gas.rightgas();
    gas.leftgas();

    //call class for snowflakes
    push();
      translate(x*-.17, y*.125);
      rotate(-.3);
      snowflake.leftflake();
    pop();

    push();
      translate(x*.21, y*-.17);
      rotate(.3);
      noStroke();
      snowflake.rightflake();
    pop();

    //calls class eyes
    pupils.leftpupil();

    pupils.rightpupil();

    //calls class halo
    halo.display();

    //calls the raindrops infront of mask
    for(let i = 0; i < 3; i++){
      rain[i].display();
    }

    //blink
    // use millis() with if and else statements
  }
}
