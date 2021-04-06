let trees = [{
    names: "Oak",
    region: "Asia and North America",
  },
  {
    names: "Willow",
    region: "Swampy regions worldwide",
  },
  {
    names: "Ash",
    region: "North and Central America",
  },
  {
    names: "Cedar",
    region: "The Himalayas and Mediterranean",
  },
  {
    names: "Redwood",
    region: "Northern California",
  },
  {
    names: "Pine",
    region: "Boral climates worldwide",
  },
  {
    names: "Birch",
    region: `Northern regions
             of North America`,
  },
  {
    names: "Walnut",
    region: `China, Iran,
             the United States,
             Turkey and Mexico`,
  },
  {
    names: "Chestnut",
    region: `Temperate regions of
            the northern hemisphere`,
  },
  {
    names: "Joshua",
    region: `Joshua Tree California
             and the nearby deserts
             in the American south-west`,
  },
];

let treeImages = [];
let leafImages = [];

let imageCounter = 0;
let randomIndex;
let animating = false;

let button;

function preload() {
  for (let i = 0; i <= trees.length - 1; i++) {
    treeImages[i] = loadImage(`assets/treeImages/tree_${trees[i].names}.jpg`);
    leafImages[i] = loadImage(`assets/leafImages/leaf_${i}.png`);
    //const imagePath = `assets/treeImages/tree_${trees[i].names}.jpg`;
    //const img = loadImage(imagePath);
    //treeImages.push(img);
  }
}

function setup() {
  createCanvas(800, 800);
  background(255);
  textSize(32);
  textStyle(BOLD);
  stroke('white');
  strokeWeight(3);
  fill(144);
  imageMode(CENTER);
  frameRate(15);
  //text("click to randomize", 50, 50);

  button = createButton("Click to randomize!");
  button.position(width/2,height-30);
  button.size(200, 50);
  button.mousePressed(buttonPressed);
}

function draw() {
  if (animating == true) {
    //  image(treeImages[imageCounter], width / 2, height / 2);
    image(leafImages[int(random(0, leafImages.length))], random(width), random(height));
    //if (imageCounter < treeImages.length) {
    //  imageCounter++;
    //  } else {
    //    imageCounter = 0;
    //  }
  }
}

function randomizer() {
  animating = false;
  if (trees[0]) {
    clear();
    randomIndex = int(random(trees.length));
    image(treeImages[randomIndex], width / 2, height / 2);
    text(
      `${trees[randomIndex].names} trees live in
          ${trees[randomIndex].region}`,
      width / 8,
      height / 4
    );
    trees.splice(randomIndex, 1);
    treeImages.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    image(leafImages[int(random(0, leafImages.length))], random(width), random(height));

    text("nothing left!", 50, 50);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 1000);
}
