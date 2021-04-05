
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

function setup() {
  createCanvas(600, 600);
  background(220);
textSize(32);

text("Click to begin your journey!", 50, 50);

//setTimeout(changeBackground, 1000);
//setInterval(changeBackground, 1000);
}

function draw() {

  if(animating == true){
    ellipse(width *.5, height *.5, random (20, 300))
  }

}

//function changeBackground(){
//  background(random(255), (random(255), (random(255));
//}

function randomizer(){
  animating = false;
  if (planets[0]){

    background(220);
    randomIndex = int(random(planets.length));
    text(`${planets[randomIndex].name} - characteristic:
${planets[randomIndex].char}`, 50, 50);
    //text(planets[randomIndex].name + " - characteristic: " + planets[randomIndex].char, 50, 50);
    planets.splice(randomIndex, 1);
  } else {
    background(220);
    text("No more planets to visit!", 50, 50);
  }
}

function mousePressed() {
  animating = true;
setTimeout(randomizer, 2000);

}
