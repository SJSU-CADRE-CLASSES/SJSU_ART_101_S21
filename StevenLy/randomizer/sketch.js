// pandas gang (arrays)
let pandas = [{
  name: "justin",
  color: "red"
}, {
  name: "david",
  color: "blue"
}, {
  name: "steven",
  color: "light blue"
}, {
  name: "abdal",
  color: "pink"
}, {
  name: "colonge",
  color: "color"
}, {
  name: "jae",
  color: "black"
}];

let randomIndex;
let animating = false;


function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);

  text("click to randomize", 50, 50);

  // *notes for myself*
  // console.log(pandas[2].color);
  // console.log("initial array is ");
  // console.log(pandas);

  // pandas.shift();
  // console.log("array after shift ");
  // console.log(pandas);

  // pandas.splice (4, 1), x = the one you want to remove in arrays, y = how many you want in the parameter to remove

  // pandas.unshift("ha");
  // console.log("array after unshift ");
  // console.log(pandas);

}

function draw() {

  if (animating == true){
    ellipse(random(width), random(height), random(50, 200));
  }
}

function randomizer(){
  animating = false;

  if (pandas[0]){
     background(random(200, 255));
    // random index = pulling a random integer to the length of the array
     randomIndex = int(random(pandas.length));
    // using text to sub integer for the name of panda
     text(`${pandas[randomIndex].name}'s favorite color is ${pandas[randomIndex].color}`, 50, 50);
    // text(pandas[randomIndex].name + "'s favorite color is " + pandas[randomIndex].color, 50, 50);
    // not letting it to repeat
     pandas.splice(randomIndex, 1);
  } else {
   background(random(200, 255));
   text("nothing left!", 50, 50);
  }
}
function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);


//  if (pandas[0]){
//    background(random(200, 255));
  // random index = pulling a random integer to the length of the array
//    randomIndex = int(random(pandas.length));
  // using text to sub integer for the name of panda
//    text(pandas[randomIndex].name, 50, 50);
  // not letting it to repeat
//    pandas.splice(randomIndex, 1);
//} else {
//  background(random(200, 255));
//  text("nothing left!", 50, 50);
//}
 }
