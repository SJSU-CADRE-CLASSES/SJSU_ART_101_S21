// snake names & food//
let snakes = [{name: "black",food: "mouse"}, 
              {name: "blue", food:"rabbit"}, 
              {name: "green",food: "lizards"}, 
              {name: "red", food: "crickets"}];
let randomIndex;

function setup() {
  createCanvas(400, 400);
  
 
  
 // console.log("initial array is " + snakes);
 // console.log(snakes);
  
 // snakes.shift();
 // console.log("array after shift");
  // console.log(snakes);
  
 // snakes.unshift("blue");
 // console.log("array after unshift")
  // console.log(snakes);
  
  
}




function draw() {

}

function mousePressed() {
  background(random(255));
   randomIndex = int(random(snakes.length));
  
  console.log(snakes[int(random(snakes.length))].name);
  text(snakes[randomIndex].name, 200, 50);
  
  snakes.splice(randomIndex, 1);
}