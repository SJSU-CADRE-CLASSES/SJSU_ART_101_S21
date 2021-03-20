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

function setup() {
  createCanvas(400, 400);
  background(200);
  
  randomIndex = int(random(trees.length));
  console.log(trees.length)
  text(trees[randomIndex].name, 50, 50);
  
  trees.splice(randomIndex, 1);
  console.log(trees);
}

function draw() {

}