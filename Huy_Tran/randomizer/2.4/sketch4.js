// TODAY I WANT TO EAT CHOCOLATE
//update 040221
let randomIndex;
let animating = false;

let imageCounter = 0;
let button;
let chocos = [];
let cnv;

let mm = [{
  name: "ROD",
  color: "yummy red"
}, {
  name: "YOH",
  color: "sweetie yellow"
}, {
  name: "GOH",
  color: "hero green"
}, {
  name: "BOH",
  color: "knight blue"
}, {
  name: "NOH",
  color: "dragon brown"
}, {
  name: "ORH",
  color: "energy orange"
}];


function preload() {
  for (let i = 0; i <= 5; i++) {
    chocos[i] = loadImage(`assets/mm_${i}.JPG`);
  }
}


function setup() {
  // createCanvas(350, 450);
  cnv = createCanvas(350, 450);
  cnv.parent("#canvasDiv");
  background(200);
  frameRate(8);
  textFont('Arial Black');

  imageMode(CENTER);

  textSize(27);

  text("PINCH ME NOW!", 50, 50);

  // button = createButton('Click me');
  button = select('#clickmeButton');
  button.position(127, 510);
  button.mousePressed(buttonPressed);
  button.class("randomizerButton");
  // console.log(chocos);
}


function draw() {
  if (animating == true) {
    // ellipse(random(width), random(height),
    // random(50, 200))
    clear();
    // image(chocos[imageCounter], width/ 2, height/ 2);
    image(random(chocos), width/ 2, height/ 2);

    if (imageCounter < chocos.length - 1) {
      imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 0;
    }


  }
}

function randomizer() {
  animating = false;
  clear();
  if (mm[0]) {
    background(random(55), random(155), random(255));
    randomIndex = int(random(mm.length));
    // text(mm[randomIndex].name, + "'s my fav color" + mm.[randomIndex].color, 50, 50);
    // text(`${mm[randomIndex].name}'s my fav color is
    // ${mm[randomIndex].color}`, 50, 50);
    text(`${mm[randomIndex].name}'s my fav color is
      ${mm[randomIndex].color}`, 20, 380);

    mm.splice(randomIndex, 1);

  } else {
    background(255, 0, 0);
    text("HUHM! IT'S OVER!", 50, 50);
  }
}

function buttonPressed() {
  setTimeout(randomizer, 2000);
  animating = true;

}
