
let planets = [{
  name: "Suul",
  char: "Hot... very very hot."
}, {
  name: "Mevy",
  char: "Basically a big ol' rock."
}, {
  name: "Veis",
  char: "Don't you know that it's toxic?"
}, {
  name: "XAErf-02",
  char: "Founded by Elon's child."
}, {
  name: "Jurt",
  char: "Stormy AF, don't bring a ship here lad!"
}];

let randomIndex;
let animating = false;
let planet = [];
let imageCounter = 0;
let button;
// let img0;
// let img1;
// let img2;
// let img3;
// let img4;

function preload(){

for (let i = 0; i <= 4; i++){
  planet[i] = loadImage("Images/planet_" + i + ".jpg");
  //img1 = loadImage('Images/planet_0.jpg');




}

}

function setup() {
  createCanvas(800, 800);
  background(0);
  fill(255);
textSize(24);
imageMode(CENTER);
//text("Click to begin your journey!", 50, 50);
frameRate(8);
button = createButton("Click to begin your journey!");
button.mousePressed(buttonPressed);
}

function draw() {

  if(animating == true){
    image(planet[imageCounter], width/2, height/2);

    if(imageCounter < planet.length - 1){
    imageCounter++;
  } else {
    imageCounter = 0;
  }
  }

}

//function changeBackground(){
//  background(random(255), (random(255), (random(255));
//}

function randomizer(){
  animating = false;
  if (planets[0]){

    background(0);
    randomIndex = int(random(planets.length));
    //random number tied to a planet
    text(`${planets[randomIndex].name} - characteristic:
      
${planets[randomIndex].char}`, 50, 50);
image(random(planet), width/2, height/2);
    //text(planets[randomIndex].name + " - characteristic: " + planets[randomIndex].char, 50, 50);
    planets.splice(randomIndex, 1);
  } else {
    background(0);
    text("No more planets to visit!", 50, 50);
  }
}

function buttonPressed() {
  animating = true;
setTimeout(randomizer, 1000);
background (0);

}
