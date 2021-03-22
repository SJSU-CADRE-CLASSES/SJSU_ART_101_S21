// Plants that i currently own
let plants = ["Ogre's Ear", "Lucky bamboo", "Mickey Mouse Cactus", "Hoya Heart", "Ficus Ginseng", "Money Tree", "Coconut"];

function setup() {
  createCanvas(600,600);
  background(200);

console.log("initial array is ");
console.log(plants);

plants.pop();
console.log("array after pop");
console.log(plants);
  
plants.push("Norbert") 
console.log("array after push");
console.log(plants);
}

function draw() {

}