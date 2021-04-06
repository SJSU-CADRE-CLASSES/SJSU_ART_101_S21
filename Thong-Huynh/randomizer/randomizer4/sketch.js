// let catchMe = [{
//   name: "Oh, Come on! ",
//   color: "I'm here. Bleh..bleh.."
// }, {
//   name: "Too bad... ",
//   color: "I'm over here!"
// }, {
//   name: "Oops! ",
//   color: "Still cannot catch me?"
// }, {
//   name: "Hehehe... ",
//   color: "About to give up?"
// }, {
//   name: "Too slow... ",
//   color: "Next time, baby!"
// }, {
//   name: "Faster! ",
//   color: "Try one more time!"
// }];

let catchMe = [];

let randomIndex1;
let randomIndex2;
let animating = false;
// let run;
let chase = [];
let imageCounter = 0;
let x;
let y;
let caught;
let startRandomizerButton;
let addMoreButton;
let cnv;
let nameInputs = [];
let firstTime = true;

function preload(){

  for (let i = 0; i <= 7; i++){
    // trolls[i] = loadImage("assets/chasing (" + i + ").jpg"); (the same as under)
    chase[i] = loadImage(`assets/chasing (${i}).png`);
  }
  caught = loadImage(`assets/chasing (8).png`);
}


function setup() {
  cnv = createCanvas(600, 600);
  cnv.parent("#canvasDiv");
  // background(220);
  background(random(200,255),random(200,255),random(200,255));
  translate(width*0.5, width*0.5);
  textSize(24);
  textStyle(BOLD);
  text("Try to catch me IF YOU CAN!",width*-0.275,0);

  // button = createButton("click to chase");
  startRandomizerButton = select("#randButton");
  startRandomizerButton.mousePressed(buttonPressed);
  // button.class("randomizerButton");

  addMoreButton = select("#addMoreButton");
  addMoreButton.mousePressed(addAnotherInput);

  for (let i = 0; i < 3; i++) {
    nameInputs.push(createInput());
    nameInputs[nameInputs.length - 1].parent("#inputFields");
  }

  imageMode(CENTER);
  frameRate(12);

  // run = new Run(width * 0.1, height * 0.5,50);

}

function draw() {
  if (animating == true){
    // background(random(200,255));
    // run.display();
    // run.move();

    clear();
    background(random(200,255));
    // background(random(0),random(0),random(150));
    image(chase[imageCounter], random(width), random(height));

    if (imageCounter < chase.length - 1){
    imageCounter++;
  } else {
    imageCounter = 0;
  }

  }
}

function addAnotherInput(){
  nameInputs.push(createInput());
  nameInputs[nameInputs.length - 1].parent("#inputFields");
}

function randomizer(){
  animating = false;
  if (catchMe[0]) {
    clear();
    background(random(200,255),random(200,255),random(200,255));
    randomIndex1 = int(random(catchMe.length));
    randomIndex2 = int(random(catchMe.length));

    x = random(width*0.25, width*0.65);
    y = random(height*0.05, height*0.5);
    text(`${catchMe[randomIndex1]}
${catchMe[randomIndex2]}`, x, y);
    image(random(chase), x + width*0.125, y + height*0.2);
    catchMe.splice(randomIndex1,1);
  } else {
    background(random(200,255),random(200,255),random(200,255));
    text("Uugh...U...caught me...", width*0.3, height*0.35);
    image(caught, width*0.5, height*0.5);
  }
}

function buttonPressed() {

if (firstTime) {
  for (let i = 0; i < nameInputs.length; i++){
    catchMe.push(nameInputs[i].value());
  }
  firstTime = false;
}
  animating = true;
  setTimeout(randomizer, 1500);
  // 1000 = 1s
}
