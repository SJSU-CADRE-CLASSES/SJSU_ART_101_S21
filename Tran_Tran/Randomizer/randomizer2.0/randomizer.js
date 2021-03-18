//animals going extinct in 2021
let animals = [{
  name: "Spix Macaw",
  why: "The deforestation"
}, {
  name: "Scimatar Oryx",
  why: "Are in rapid decline due to poaching, for it's long antlers.
        this species has gone extinct in the wild by 2000"
}, {
  name: "Rockhopper Penguin",
  why: "pollution"
}, {
  name: "Snow Leopard",
  why: "hunting"
}, {
  name: "Black Rhino",
  why: "poaching"
}]

let randomIndex;



function setup() {

createCanvas(1500,1500);
background(200);
textSize(100);

text("click to kill", width/4, height/2);

// console.log(animals.length)
// console.log(animals[randomIndex].name);

// console.log(animals);
// console.log("initial array is");
//
// animals.shift();
// console.log("array after shift")
// console.log("animals");
//
// animals.unshift("Rockhopper Penguin");
// console.log("array after unshift");
// console.log(animals);
}

function draw() {

}
function changeBackground(){
  background(random(255), random(255), random(255));
}
function mousePressed(){

if (animals[0]){
  //displays random name and splices it out of array
  background(random(200, 255));
  randomIndex = int(random(animals.length));
  text(animals[randomIndex].name, width/4, height/2);
  text(animals[randomIndex].why, width/4, 1000);
  animals.splice(randomIndex, 1);
} else{
  background(random(200, 255));
  text("All are going extinct in 2021", 100, height/2);
}
}
