//sets and reps combination
let workout = [{
  numberOfSets: "3",
  numberOfReps: "5"
}, {
  numberOfSets: "5",
  numberOfReps: "8"
}, {
  numberOfSets: "2",
  numberOfReps: "15"
}, {
  numberOfSets: "3",
  numberOfReps: "20"
}, {
  numberOfSets: "5",
  numberOfReps: "10"
}, {
  numberOfSets: "2",
  numberOfReps: "9"
}, {
  numberOfSets: "3",
  numberOfReps: "7"
}];


let randomIndex;
let animating = false;
let workoutImages = [];
let imageCounter = 0;
let button;

function preload(){
  for (let i = 0; i < 5; i++){
    workoutImages[i] = loadImage("assets/workout_" + i + ".jpg");
  }
}

function setup() {
  createCanvas(600, 600);
  background(220);
  textSize(36);
  //text("click to randomize", 50, 50);
  imageMode(CENTER);
  textFont('Avant Garde');
  textStyle(BOLD);
  frameRate(12);

  button = createButton("Click to choose workout");
  button.mousePressed(buttonPressed);
  button.style("padding", "15px");
  button.style("background-color", "#42f5d4");
}

function draw() {

  if(animating==true){
    //ellipse(random(width), random(height), random(50, 200));
    clear();
    image(workoutImages[imageCounter], width/2, height/2);
    if (imageCounter < workoutImages.length - 1){
      imageCounter++;
    } else {
      imageCounter = 0;
    }
  }



}
// function changeBackground(){
//   if (counter <=5) {
//   counter++;
//   console.log(counter)
//   background(random(255), random(255), random(255));
//   setTimeout(changeBackground, 1000);
// } else {
// }
// }


function randomizer(){
  animating = false;

  if (workout[0]){
    //background(random(150,255));
    clear();
    randomIndex = int(random(workout.length));
    image(random(workoutImages), width/2, height/2);
    text(`${workout[randomIndex].numberOfSets} sets of ${workout[randomIndex].numberOfReps} reps`, width/2, 80);
    workout.splice(randomIndex, 1);
  } else {
    background(random(150,255));
    text("Finished workout!", 50, 50);
  }
}

function buttonPressed() {
  animating = true;
  setTimeout(randomizer, 2000);
}



// plants[1] = "philodendron leaf"
// console.log(plants);
//
// console.log("initial array is " + plants)
// console.log(plants);
//
// plants.splice(2, 2);
// console.log("array after splice")
// console.log(plants);

// .....pull a random integer from objects.....
// console.log(random(5));
// console.log(plants[int(random(5))]);
