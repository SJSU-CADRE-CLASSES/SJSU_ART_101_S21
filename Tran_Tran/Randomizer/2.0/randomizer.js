//animals going extinct
let animals = [{
  name: "Spix Macaw",
  why: "deforestation"
}, {
  name: "Scimatar Oryx",
  why: "poaching"
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

function setup() {
createCanvas(1000,1000);
background(10);

console.log(animals.length)
console.log(animals[int(random(5))]);
}

function draw() {

}
