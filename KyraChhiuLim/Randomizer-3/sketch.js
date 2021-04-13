//what should i eat from mcdonalds
let mcdonalds = [{
    name: "mcchickens",
    qty: "3"
  },
  {
    name: "mcnuggets",
    qty: "20"
  },
  {
    name: "oreo mcflurrys",
    qty: "14"
  },
  {
    name: "spicy mcnuggets",
    qty: "80"
  },
  {
    name: "fish filets (eww)",
    qty: "1/2"
  },
  {
    name: "big macs",
    qty: "16"
  }
];

let randomIndex;
let animating = false;
let ronnie = [];
let imageCounter = 0;


function preload() {

  for (let i = 0; i <= 13; i++) {
    ronnie[i] = loadImage(`assets/ronnie_${i}.jpg`)
  }
}


function setup() {
  createCanvas(600, 600);
  background(243, 236, 128);
  textSize(30);
  textFont('Comic Sans MS')
  textStyle(BOLD);
  imageMode(CENTER);
  frameRate(8);


  button = createButton("summon the spirit of ronnie to help you");
  button.mousePressed(buttonPressed);




  console.log(ronnie)
  text("what should we get fr mcdonalds?", 50, 200);


}

function draw() {

  if (animating == true) {
    clear();
    image(ronnie[imageCounter], width / 2, height / 2);


    if (imageCounter < ronnie.length - 1) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }
  }
}

function randomizer() {
  animating = false;

  if (mcdonalds[0]) {
    //displays random name & splices it out of array
    background(random(100, 245), random(120, 240), random(130, 245));
    clear();
    randomIndex = int(random(mcdonalds.length));
    image(random(ronnie), width / 2, height / 2);
    text(mcdonalds[randomIndex].qty, width / 3.5 , height - 200);
    text(mcdonalds[randomIndex].name,  width / 2.5 , height - 200);
    mcdonalds.splice(randomIndex, 1);
  } else {
    background(random(100, 245), random(120, 240), random(130, 245));
    text("too indecisive! no mcdonalds for you :/", 40, 200);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);


}
