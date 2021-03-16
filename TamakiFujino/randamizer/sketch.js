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

function setup() {
  createCanvas(600, 600);
  background(200);

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



  // suger.splice(randomIndex, 1);
  // console.log(suger);




}

function draw() {

}

function mousePressed(){
  background(random(200,255));
  randomIndex = int(random(suger.length));
  //int means not decimals
    console.log(suger[randomIndex].name);
    text(suger[randomIndex].name, 50, 50);
}
