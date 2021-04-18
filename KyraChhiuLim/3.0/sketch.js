let array = [];

function setup() {
  createCanvas(600, 600);
  background(20, 250, 20);
  strokeWeight(3);
}

function draw() {
   if (mouseIsPressed) {
     line(mouseX, mouseY, pmouseX, pmouseY);
     array.push ([mouseX, mouseY]);
   }
    else {}
}

function keyTyped(){

  if (key === 's'){
    //save this image
    saveCanvas('fileName', 'png');
  }

  for(let i = 0; i < array.length - 1; i++){

  }

  line(array [i][0], array[i][1], array [i + 1][0], array [i + 1][1]);

  return false;
}
