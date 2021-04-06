//animals going extinct in 2021
let animals = [{
  name: "Spix Macaws",
  why: "Deforestation of habitat leaving only 100 alive, in captivity"
  // img.src = 'species_0.png';
  // <src="./assets/species_0.png">
  // imageUrl: "https://imgur.com/a/3CYj3Wn"
}, {
  name: "Scimatar Oryxs",
  why: "Are in rapid decline due to poaching, for it's long antlers"
  // imageUrl:'assets/species_1.png';
}, {
  name: "Rockhopper Penguins",
  why: "Pollution and commercial fishing are killing these species"
  // imageUrl:'assets/species_2.png';
}, {
  name: "Snow Leopards",
  why: "Dying due to huntings and retalitated-killings"
  // imageUrl:'assets/species_3.png';
}, {
  name: "Black Rhinos",
  why: "Are being poached for its horn and its medicinal properties"
  // loadImage:'assets/species_4.png';
}]

var colorArray = [
  '#F30000',
  '#A62121',
  '#782626',
  '#D50707'
]

// var img = new Image();
// img.src[0] = 'species_0.png'
// img.src[1] = 'species_1.png'
// img.src[2] = 'species_2.png'
// img.src[3] = 'species_3.png'
// img.src[4] = 'species_4.png'

let randomIndex;

animating = false;

let button;

let species = [];

let imageCounter = 0;

function preload(){
  for (let i = 0; i <= 4; i++){
  species[i] = loadImage(`assets/species_${i}.png`);
}
}

function setup() {

createCanvas(800,800);
background(10);
fill(255);
textAlign(CENTER);
textStyle(BOLD);
textSize(50);
text("What Happened?", width/2, height/2);

button = createButton("Click to Kill");
button.mousePressed(buttonPressed)
button.style("padding", "20px");
button.style("background-color", "#a60000");



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
if (animating == true){
stroke(random(5, 50))
strokeWeight(10,50);
noStroke();
frameRate(20);
fill(random(colorArray));
ellipse(random(width), random(height),random(80, 300));
// clear();
// image(species[imageCounter], width/2, height/2);
//
// if(imageCounter < species.length - 1){
// imageCounter++;
// } else {
//   imageCounter = 0;
}
// color(random(#FFF9F7, #FFB69E, #FF5922));

}



function changeBackground(){
  background(random(255), random(255), random(255));
  // if(animals[name: "Spix Macaw"] == true){
  // background((0, 0, 255));

}

function buttonPressed(){
  animating = true;
  setTimeout(randomizer, 3000);

// if (animals[0]){
//   //displays random name and splices it out of array
//   background(random(200, 255));
//   randomIndex = int(random(animals.length));
//
//   textSize(100);
//
//   text(animals[randomIndex].name, 100, 1200);
//
//   textSize(50);
//   text(animals[randomIndex].why, 100, 1300);
//   animals.splice(randomIndex, 1);
// } else{
//   background(random(200, 255));
//
//   textSize(100);
//   text("All are going extinct in 2021", 100, height/2);
// }
}

function randomizer(){
  animating = false;
  if (animals[0]){
    //displays random name and splices it out of array
    background(random(10, 25));
    randomIndex = int(random(animals.length));

    fill(10);
    stroke(255);
    strokeWeight(2);
    textSize(40);
    image(species[randomIndex], 0, 0);
    console.log(randomIndex);
    text(animals[randomIndex].name, 400, 660);
    console.log(randomIndex);

    textSize(20);
    text(animals[randomIndex].why, 400, 700);
    animals.splice(randomIndex, 1);
    species.splice(randomIndex, 1);
  } else{
    background(10);
    strokeWeight(3);
    // stroke(250);
    noStroke();
    fill(255, 0, 0);
    textSize(50);
    text("All are going extinct in 2021", 400, height/2);

    if (animals.length == 0){
      animating = false;
    }
  }

  // function theEnd(){
  //   // if (animals.length == 0){
  //   //   animating = false;
  //   }
  }
