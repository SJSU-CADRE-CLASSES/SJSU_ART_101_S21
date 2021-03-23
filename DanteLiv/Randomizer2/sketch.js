let trees = [{name: "Oak", region: "Asia, North America"}, 
            {name: "Willow", region: "Swampy regions worldwide"}, 
            {name: "Ash", region: "North and Central America"},
            {name: "Cedar", region: "The Himalayas and Mediterranean"},
            {name: "Redwood", region: "Northern California"},
            {name: "Pine", region: "Boral climates worldwide"},
            {name: "Birch", region: "Northern regions of North America"},
            {name: "Walnut", region: "primarily in China, Iran, the United States, Turkey and Mexico"},
            {name: "Chestnut", region: "Temperate regions of the northern hemisphere"},
            {name: "Joshua", region: "Joshua Tree California and the nearby deserts in the American south-west"}];

let randomIndex;
let animating = false;
//let counter = 0;

function setup() {
  createCanvas(800, 800);
  //background(200);
  textSize(40);
  text("Click to start", 50, 50)

//  setTimeout(changeBackground, 1000);
}

function draw() {
  if(animating == true) {
    ellipse(random(width), random(height), random(50, 200));
    
  }
}

// function changeBackground() {
//  if(counter <= 5) {
//    counter++;
//    console.log(counter);
//  background(random(255), random(255), random(255));
//  setTimeout(changeBackground, 1000);
// } else{
// }
// }

function randomizer() {
  animating = false;
  if(trees[0]) {
  background(random(200,255));
  randomIndex = int(random(trees.length));
  console.log(trees.length)
  text(`${trees[randomIndex].name} trees
  grow in this region:

  ${trees[randomIndex].region}`, 50, 50);
  trees.splice(randomIndex, 1);
  } else {
  background(random(200,255));
    text("List is now Empty.", 50, 50)
  }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);
  
}