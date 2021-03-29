let suger = [{
  name: "ice cream",
  why: "cold"
}, {
  name: "gummy",
  why: "elasticity"
}, {
  name: "chocolate",
  why: "melting"
}, {
  name: "candy",
  why: "sweet"
}];

let randomIndex;
let animating = false;
//let counter = 0;

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(35);

  text("click to randomize", 50, 50);

  //setTimeout(changeBackground, 1000);//1000milisec = 1000milisec

  // console.log(suger[1]);
  // console.log(suger.length);
  //
  // suger[1] = "gummy bear";
  // console.log(suger);

  console.log("intial array");
  console.log(suger);

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
  if(animating == true){
    ellipse (random(width), random(height), random(50,200),random(50,200));
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

function randomizer (){
  animating = false;

  if (suger[0]) {
    background(random(200, 255));
    randomIndex = int(random(suger.length));
    //int means not decimals
    //  console.log(suger[randomIndex].name);
    //text(suger[randomIndex].name + " because " + suger[randomIndex].why, 50, 50);
text(`${suger[randomIndex].name}
  because ${suger[randomIndex].why}`, 50, 50);
    suger.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("nothing left", 50, 50)

  }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);

}
