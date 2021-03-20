//what should i eat from mcdonalds
let mcdonald = [
  {
    name: "mcchicken",
    qty: "3"
  },
  {
    name: "mcnuggets",
    qty: "20"
  },
  {
    name: "oreo mcflurry",
    qty: "14"
  },
  {
    name: "spicy mcnuggets",
    qty: "80"
  },
  {
    name: "fish filet (eww)",
    qty: "1/2"
  },
  {
    name: "big mac",
    qty: "16"
  }
];

let randomIndex;

function setup() {
  createCanvas(600, 600);
  background(200);
}

function draw() {

}

function mousePressed(){
  background(random(100, 245),random(120, 240),random(130, 245));

  randomIndex = int(random(mcdonald.length));
  text(mcdonald[randomIndex].name, 60, 50);
  text(mcdonald[randomIndex].qty, 40, 50);
  mcdonald.splice(randomIndex, 1);
}
