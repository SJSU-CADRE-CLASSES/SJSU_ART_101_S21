//types of houseplants
let plants = [{
  name: "anthurium",
  color: "black king"
}, {
  name: "philodendron",
  color: "green congo"
}, {
  name: "calathea",
  color: "white fusion"
}, {
  name: "pothos",
  color: "grey feather"
}, {
  name: "peperomia",
  color: "striped one"
}, {
  name: "hoya",
  color: "murky splash"
}];
// plants[1] = "philodendron leaf"
// console.log(plants);
//
// console.log("initial array is " + plants)
// console.log(plants);
//
// plants.splice(2, 2);
// console.log("array after splice")
// console.log(plants);


let randomIndex;

function setup() {
  createCanvas(400, 400);
  background(220);

// pull a random integer from objects:
// console.log(random(5));
// console.log(plants[int(random(5))]);

}

function draw() {
}

function mousePressed() {
  background(random(150,200));
  randomIndex= int(random(plants.length));
  text(plants[randomIndex].name, 50,50);
  plants.splice(randomIndex, 1);
}
