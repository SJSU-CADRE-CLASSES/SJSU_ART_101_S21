//what should i eat from mcdonalds
let mcdonalds = [
  {
    name: "mcchickens",
    qty: "3"
  },
  {
    name: "mcnuggets",
    qty: "20"
  },
  {
    name: "oreo mcflurrys",
    qty: "14"
  },
  {
    name: "spicy mcnuggets",
    qty: "80"
  },
  {
    name: "fish filets (eww)",
    qty: "1/2"
  },
  {
    name: "big macs",
    qty: "16"
  }
];

let randomIndex;
let animating = true


function setup() {
  createCanvas(600, 600);
  background(243, 236, 128);
  textSize(32);

  text("what should we get from mcdonalds?", 50, 200);


}

function draw() {
  if (animating == true) {
    ellipse(random(width), random(height), random(50,200));
  }
}

function randomizer(){
  animating = false;
  if (mcdonalds[0]) {
    //displays random name & splices it out of array
    background(random(100, 245), random(120, 240), random(130, 245));
    randomIndex = int(random(mcdonalds.length));
    text(mcdonalds[randomIndex].name, 250, 200);
    text(mcdonalds[randomIndex].qty, 200, 200);
    mcdonalds.splice(randomIndex, 1);
  } else {
    background(random(100, 245), random(120, 240), random(130, 245));
    text("too indecisive! no mcdonalds for you :/", 40, 200);
  }
}
function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);


}
