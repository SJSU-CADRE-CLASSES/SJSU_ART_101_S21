
let dogs = [{name: "sippi", color: "red"}
, {name:"duke", color: "blue"},
{name: "stark", color: "green"},
{name: "Boomy", color: "white"}];

let randomIndex;
let animating = false;
let pic = [];

function preload(){

  for (let i = 1; i <= 4; i++){
    pic[i] = loadImage("assets/pic_" + i + ".png")
  }
}


function setup() {
  createCanvas(400, 400);
    background(255, 400, 30);
    textSize(30);

    text("click to randomize", 50, 50);
}


function draw() {

  if(animating == true){
  image(pic[1], 0, 0);
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

function mousePressed(){
animating = true;
setTimeout(randomizer, 2000);

}
