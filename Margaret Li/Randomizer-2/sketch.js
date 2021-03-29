let birds = [
  {name: "cardinal",
    color: "red"},
  {name: "lazuli bunting",
    color: "cyan"},
  {name: "bluebird",
    color: "bright blue"},
  {name: "hummingbird",
    color: "green and pink"},
  {name: "house finch",
    color: "pink"},
  {name: "sandpiper", color: "light brown"},
  {name: "robin",
    color: "black and orange"},
  {name: "goldfinch",
    color: "yellow"},
  {name: "blue jay",
    color: "light blue"},
  {name: "painted bunting",
    color: "rainbow"},
  {name: "flamingo",
    color: "pink"},
  {name: "mockingbird", color: "gray"}
];


let randomIndex;
let animating;

function setup() {
  createCanvas(600, 600);
  background(200,220,240);
  textSize(26);
  fill(0);
  text("Click the Randomizer.", 100, 100);
}

function draw() {

  if (animating==true){

  background (random(200,255), random(100,255), random(100,255));
  fill(255);
  ellipse(random(width), random(height), random(width), random(height));
  triangle(random(width), random(height), random(width), random(height), random(width), random(height));
  rect(random(width), random(height), random(width), random(height));
  }
}


function randomizer(){

  animating=false;
  if (birds[0]) {
    background(200,220,240);
    fill(random(0,200), random(0,100), random(0,100));
    randomIndex = int(random(birds.length));
    text(`The ${birds[randomIndex].name} is ${birds[randomIndex].color}.`, 100, 100);
    birds.splice(randomIndex, 1);
  } else {
    background(200,220,240);
    fill(random(0,200), random(0,100), random(0,100));
    text("That's all!", 50, 50);
  }
}

function mousePressed() {

  animating=true;

  setTimeout(randomizer, 1000);

}
