// pandas gang (arrays)
let pandas = [{
  name: "justin",
  color: "roundest"
}, {
  name: "david",
  color: "blue"
}, {
  name: "steven",
  color: "lightblue"
}, {
  name: "abdal",
  color: "red"
}, {
  name: "colonge",
  color: "color"
}, {
  name: "jae",
  color: "black"
}];

let randomIndex;

function setup() {
  createCanvas(600, 600);
  background(200);

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

}

function mousePressed() {
    background(random(200, 255));
  // random index = pulling a random integer to the length of the array
    randomIndex = int(random(pandas.length));
  // using text to sub integer for the name of panda
    text(pandas[randomIndex].name, 50, 50);
  // not letting it to repeat
    pandas.splice(randomIndex, 1);
}
