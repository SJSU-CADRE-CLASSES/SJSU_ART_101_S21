
let dogs = [{name: "William", color: "red"}
, {name:"Joe", color: "blue"},
{name: "Andy", color: "green"},
{name: "Eddie", color: "white"}];

let randomIndex;
let animating = false;
let pic = [];
let imageCounter = 1;
let button;

function preload(){

  for (let i = 1; i <= 4; i++){
    pic[i] = loadImage("assets/pic_" + i + ".png")
  }
}


function setup() {
  createCanvas(400, 400);
    background(255, 400, 30);
    textSize(30);
    imageMode(CENTER);
    frameRate(0.5);

    text("click to randomize", 50, 50);

    button = createButton("click to randomize");
    button.mousePressed(buttonPressed);
}


function draw() {

  if(animating == true){
    clear();
  image(pic[imageCounter], width/2, height/2);
  if (imageCounter < pic.length){
    imageCounter++;
  } else{
    imageCounter = 1;
  }
  }
}

function randomizer(){
animating = false;

  if (dogs[0]){
    background(random(200, 255));
    randomIndex = int(random(dogs.length));

    text(`${dogs[randomIndex].name} 's favorite color is
     ${dogs[randomIndex].color}`, 50, 50);
    dogs.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("That's all folks!", 50, 50);
  }
}

function buttonPressed(){
animating = true;
setTimeout(randomizer, 2000);

}
