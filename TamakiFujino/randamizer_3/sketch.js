let suger = [{
  name: "ice cream",
  why: "chocolate mint"
}, {
  name: "gummy",
  why: "haribo goldbears"
}, {
  name: "chocolate",
  why: "kitkat"
}, {
  name: "candy",
  why: "skittles"
}];

let randomIndex;
let animating = false;
//let counter = 0;

let hanas = [];
let imageCounter = 0;

let button;


function preload() {
  for (let i = 0; i <= 11; i++) {
    hanas[i] = loadImage("assets/hana_" + i + ".png")
  }
}

function setup() {
  createCanvas(600, 600);
  background(200, 200, 233);
  textSize(35);
  imageMode(CENTER);
  frameRate(20);

  button = createButton("click to randomize");
  button.mousePressed(buttonPressed);

  text("MY RANDOMIZER",50, height/2);
  console.log(hanas);

  //setTimeout(changeBackground, 1000);//1000milisec = 1000milisec

  // console.log(suger[1]);
  // console.log(suger.length);
  //
  // suger[1] = "gummy bear";
  // console.log(suger);
  //
  // console.log("intial array");
  // console.log(suger);

  //substract one array element at the end - use shift if at the beginning
  // suger.pop();
  // console.log("array after pop");
  // console.log(suger);

  // add one array element at the end - use unshift if at the beginning
  // suger.push("donut");
  // console.log("array after push");
  // console.log(suger);

  //(index = where, number = how many elements?) in order to insert element in the middle
  // suger.splice(2, 2);
  // console.log("array after splice");
  // console.log(suger);

  console.log(suger[0].why);



  var name = "tamaki";

  console.log(name);



  // suger.splice(randomIndex, 1);
  // console.log(suger);




}

function draw() {

  if (animating == true) {
    clear();
    image(hanas[imageCounter], width / 2, height / 2);

    if (imageCounter < hanas.length - 1) {
      imageCounter++;
    } else {
      imageCounter = 0;
    }
  }
}

// function changeBackground(){
//   if (counter <= 5){
//     counter++;
//   background(random(255),random(255),random(255));
//     setTimeout(changeBackground, 1000);//1000milisec = 1000milisec
// } else {
//
// }
// }

function randomizer() {
  animating = false;

  if (suger[0]) {
    //background(random(200, 255));
    randomIndex = int(random(suger.length));
    //int means not decimals
    //  console.log(suger[randomIndex].name);
    //text(suger[randomIndex].name + " because " + suger[randomIndex].why, 50, 50);
    text(`${suger[randomIndex].name}
      especially ${suger[randomIndex].why}`, 50, 50);
  image(random(hanas), width / 2, height / 2);
    suger.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing left", width/2 , width/2)

  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);

}
