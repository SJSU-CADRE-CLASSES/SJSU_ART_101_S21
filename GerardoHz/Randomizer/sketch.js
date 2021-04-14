let carros = [];
let cars = [{name: "Nice home", color:"very cold place"},{name:"yikes!", color: "good luck living there."},{name: "pretty cool", color: "hope you packed lunch."},{name: "hmmm", color: "I dont know if that habitable."}, {name: "I would live in a space shuttle", color: "If I were you"}];

let randomIndex;
let animating = false;
let img;
let imageCounter = 0;
let button;

let cnv;
let nameInputs = [];


function preload (){
  for (let i = 0; i <= 6; i++) {
    carros[i] = loadImage(`pictures/car${i}.jpg`)

}
}


function setup () {
cnv = createCanvas (800, 800);

cnv.parent("#canvasDiv");

background(200);
textSize (23);
imageMode(CENTER);
frameRate (9);
text("Have your passport ready! Everyone must travel to save mankind!",10,50);

//button = createButton("Find your new home")

button = select("#Button")
button.mousePressed(buttonPressed);

addmorebutton = select("#Button")
addmorebutton.mousePressed(addAnotherInput);




for(let i = 0; i <3; i++ ){
nameInputs.push(createInput());
nameInputs[nameInputs.length -1].parent("#inputFields");
}
console.log(carros);
}
function draw () {


if (animating == true){
  clear();

image(carros[imageCounter],width/2,height/2);

if (imageCounter < carros.length - 1){
imageCounter++;
} else {
  imageCounter = 0;
}
}


}

function addAnotherInput(){
  nameInputs.push(createInput());
  nameInputs[nameInputs.length -1].parent("#inputFields");

}


function randomizer(){
  animating = false;
  if (cars[0]){
    clear();
//background(random(200, 255));



randomIndex = int(random(cars.length));



image(random(carros),width/2,height/2);

text (`${cars[randomIndex].name}
${cars[randomIndex].color}`, width/2, height - 100,);
fill(255,255,255);
cars.splice(randomIndex, 1);
}else {
background(random(200, 255))

text("no more homes left", 200,200);
}

}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);

}
