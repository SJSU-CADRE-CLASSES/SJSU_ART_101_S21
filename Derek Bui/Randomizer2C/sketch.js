
let dogs = [{name: "William", color: "loyal. (P)"}
, {name:"Joe", color: "funny. (R)"},
{name: "Andy", color: "cool. (O)"},
{name: "Eddie", color: "funny (in a way). (T)"},
{name: "Nolan", color: "radical to me. (E)"},
{name: "David", color: "nice to me. (C)"},
{name: "James", color: "shy. (T)"},
{name: "Kenny", color: "very smart. (E)"},
{name: "Jess", color: "very sweet. (D)"},];

let randomIndex;
let animating = false;
let pic = [];
let imageCounter = 1;
let button;

function preload(){

  for (let i = 1; i <= 11; i++){
    pic[i] = loadImage("assets/pic_" + i + ".png")
  }
}


function setup() {
  createCanvas(400, 400);
    background(255, 400, 30);
    textSize(30);
    imageMode(CENTER);
    frameRate(.5);

    text("Friends are power", 50, 50);

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

    text(`${dogs[randomIndex].name} is very
     ${dogs[randomIndex].color}`, 50, 50);
    dogs.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("Can't live life without them", 50, 50);
  }
}

function buttonPressed(){
animating = true;
setTimeout(randomizer, 2000);

}
