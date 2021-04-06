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
  name: "potho",
  color: "grey feather"
}, {
  name: "peperomia",
  color: "striped one"
}, {
  name: "hoya",
  color: "murky splash"
}];


let randomIndex;
let animating = false;
// let counter = 0;

function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(24);
  text("click to randomize", 50, 50);

  // setTimeout(changeBackground, 1000);

}

function draw() {

if(animating==true){
  ellipse(random(width), random(height), random(50, 200));

}



}
// function changeBackground(){
//   if (counter <=5) {
//   counter++;
//   console.log(counter)
//   background(random(255), random(255), random(255));
//   setTimeout(changeBackground, 1000);
// } else {
// }
// }


function randomizer(){
animating = false;


  if (plants[0]){
    background(random(150,200));
    randomIndex= int(random(plants.length));
    text(`${plants[randomIndex].name}'s one type of color
    is ${plants[randomIndex].color}`, 50,50);
    // text(plants[randomIndex].name + "'s natural color is " + plants[randomIndex].color, 50,50);
    plants.splice(randomIndex, 1);
  } else {
  background(random(150,200));
  text("thats all folks!", 50, 50)

  }
}

function mousePressed() {
  animating = true;
  setTimeout (randomizer, 2000);

}



// plants[1] = "philodendron leaf"
// console.log(plants);
//
// console.log("initial array is " + plants)
// console.log(plants);
//
// plants.splice(2, 2);
// console.log("array after splice")
// console.log(plants);

// .....pull a random integer from objects.....
// console.log(random(5));
// console.log(plants[int(random(5))]);
