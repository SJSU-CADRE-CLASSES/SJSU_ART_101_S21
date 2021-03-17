
let dogs = [{name: "sippi", color: "red"}
, {name:"duke", color: "blue"},
{name: "stark", color: "green"}];

let randomIndex;

function setup() {
  createCanvas(400, 400);
    background(255, 400, 30);
    textSize(30);

  randomIndex = int(random(dogs.length));

  console.log(dogs[randomIndex].name);
  text(dogs[randomIndex].name, 50, 50);

}


function draw() {
}

function mousePressed(){

  randomIndex = int(random(dogs.length));

  console.log(dogs[randomIndex].name);
  text(dogs[randomIndex].name, 50, 50);

}
