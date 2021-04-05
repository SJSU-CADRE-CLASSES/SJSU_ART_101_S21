let suger = [{
  name: "● ●   ○ ○ ○",
  why: "A"
}, {
  name: "● ○   ● ● ●",
  why: "B"
}, {
  name: "○ ●   ● ● ○",
  why: "C"
}, {
  name: "● ○   ○ ● ○",
  why: "D"
}, {
  name: "● ○   ○ ○ ○",
  why: "E"
}, {
  name: "● ○   ○ ● ●",
  why: "F"
}, {
  name: "○ ●   ○ ● ●",
  why: "G"
}, {
  name: "○ ○   ● ○ ●",
  why: "H"
}, {
  name: "○ ●   ● ○ ○",
  why: "I"
}, {
  name: "● ●   ○ ● ○",
  why: "J"
}, {
  name: "● ●   ● ● ○",
  why: "K"
}, {
  name: "○ ●   ○ ○ ●",
  why: "L"
}, {
  name: "○ ○   ● ● ●",
  why: "M"
}, {
  name: "○ ○   ● ● ○",
  why: "N"
}, {
  name: "○ ○   ○ ● ●",
  why: "O"
}, {
  name: "○ ●   ● ○ ●",
  why: "P"
}, {
  name: "● ●   ● ○ ●",
  why: "Q"
}, {
  name: "○ ●   ○ ● ○",
  why: "R"
}, {
  name: "● ○   ● ○ ○",
  why: "S"
}, {
  name: "○ ○   ○ ○ ●",
  why: "T"
}, {
  name: "● ●   ● ○ ○",
  why: "U"
}, {
  name: "○ ●   ● ● ●",
  why: "V"
}, {
  name: "● ●   ○ ○ ●",
  why: "W"
}, {
  name: "● ○   ● ● ●",
  why: "X"
}, {
  name: "● ○   ● ○ ●",
  why: "Y"
}, {
  name: "● ○   ○ ○ ●",
  why: "Z"
}];

let randomIndex1;
let randomIndex2;
let randomIndex3;
let randomIndex4;
let randomIndex5;
let randomIndex6;
let animating = false;
//let counter = 0;

let hanas = [];
let imageCounter = 0;

let button;


// function preload() {
//   for (let i = 0; i <= 11; i++) {
//     hanas[i] = loadImage("assets/hana_" + i + ".png")
//   }
// }

function setup() {
  createCanvas(displayWidth,500);
  //background(255);
  imageMode(CENTER);
  frameRate(20);

  button = createButton("PUNCH HOLES");
  button.mousePressed(buttonPressed);
  button.position(width*0.475, height*0.95);
  button.style("background-color", "#000000")
  button.style("border-color", "#ffffff")
  button.style("color", "#ffffff")
  button.style("padding", "15px")

// textSize(30);
//   text("MY RANDOMIZER",width*4, height/2);
}

function draw() {

  if (animating == true) {
    clear();
    //image(hanas[imageCounter], width / 2, height / 2);

    // if (imageCounter < hanas.length - 1) {
    //   imageCounter++;
    // } else {
    //   imageCounter = 0;
    // }
    ellipse(random(width*0.375,width*0.7),random(height*0.4,height*0.9),33,33);
    ellipse(random(width*0.375,width*0.7),random(height*0.4,height*0.9),33,33);
  }

}


function randomizer() {
  animating = false;
  clear();

  if (suger[0]) {
    textSize(80);
    fill(255);
    randomIndex1 = int(random(suger.length));
    text(`${suger[randomIndex1].name}`, width*0.375, height*0.4);
    randomIndex2 = int(random(suger.length));
    text(`${suger[randomIndex2].name}`, width*0.375, height*0.5);
    randomIndex3 = int(random(suger.length));
    text(`${suger[randomIndex3].name}`, width*0.375, height*0.6);
    randomIndex4 = int(random(suger.length));
    text(`${suger[randomIndex4].name}`, width*0.375, height*0.7);
    randomIndex5 = int(random(suger.length));
    text(`${suger[randomIndex5].name}`, width*0.375, height*0.8);
    randomIndex6 = int(random(suger.length));
    text(`${suger[randomIndex6].name}`, width*0.375, height*0.9);

textSize(10);
    text(`
    ${suger[randomIndex1].why}
    ${suger[randomIndex2].why}
    ${suger[randomIndex3].why}
    ${suger[randomIndex4].why}
    ${suger[randomIndex5].why}
    ${suger[randomIndex6].why}`, width*0.7, height*0.7);
  }
}



function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 1500);

}
