// snake names & food//
let snakes = [{name: "black",food: "mouse"}, 
              {name: "blue", food:"rabbit"}, 
              {name: "green",food: "lizards"}, 
              {name: "red", food: "crickets"}];
let randomIndex;
let animating = false;
let znakes = [];
let button;
let nameInput
//---------------video 2c.2-------------------------//
  //function preload(){
  for (let i = 0; i <= 8; i++){
    znakes[i] = loadImage(`slither/znakes_${i}.JPG`)
  //}
  
}


function setup() {
  createCanvas(400, 400);
  background(200, 300, 400)
  textSize(38)
  
 text("click to ezimodnar",25, 200);
 console.log(znakes);
  //---------------video 2c.4-----------------------//
 //button = createButton("click to be confused")
  button = select("#mybutt")
 button.mousePressed(buttonPressed);
 button.style("padding", "33px");
 button.style("background-color","#6ec716")
  
 // nameInput = createInput();
 // nameInput.parent("#inputFields");
  setTimeout(changeBackground, 4033.300);
 
  
 // console.log("initial array is " + snakes);
 // console.log(snakes);
  
 // snakes.shift();
 // console.log("array after shift");
  // console.log(snakes);
  
 // snakes.unshift("blue");
 // console.log("array after unshift")
  // console.log(snakes);

  
  //console.log(random(5));
  //console.log(snakes[int(random(snakes.length))]);
  
}




function draw() {

  if(animating == true){
    square(random(width), random(height), random(20, 200));
  }
}
//--------------------changing Background---------------------//
function changeBackground(){
  background(random(233),random(233),random(233));
  setTimeout(changeBackground, 3033.300); 
}
function randomizer(){
 animating = false; //2b.7


 if (snakes[0]){
  background(random(200, 255));
   randomIndex = int(random(snakes.length));
  
  //console.log(snakes[int(random(snakes.length))].name);
 text(`${snakes[randomIndex].name}'s favortie food is
${snakes[randomIndex].food}`,10, 50);
  
  snakes.splice(randomIndex, 1);
  } else {
 
    background(random(300, 245));
  
  {text("click for more",50, 50); 
   //vid2b.5 still encountering issues
  }  
}         
  
}

function buttonPressed() {
 animating = true;
 setTimeout(randomizer, 1200);
}
