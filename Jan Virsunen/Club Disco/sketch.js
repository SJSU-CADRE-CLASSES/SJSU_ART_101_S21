let array = [];

let noiseOffset = 0.0;

function setup() {
 createCanvas(windowWidth, windowHeight);
  
   resetSketch();
  
  var button = createButton("clear");
  button.mousePressed(resetSketch);
}
//------------------------button to clear sketch------------------//
function resetSketch(){
  background(200, 300, 500);
  
 strokeWeight(5);
  noFill(0);
  array =[];
}

function draw() {
  background(200, 300, 500, 2);
  
  noiseOffset += 0.01;
  
  fill(50, 50 ,500)
  noStroke();
  square(50, 50, 50)
  square(50, 100, 50)
  square(50, 150, 50)
  square(100, 150, 50)
  square(150, 150, 50)
  square(150, 200, 50)
  square(150, 250, 50)
  square(150, 300, 50)
  square(100, 300, 50)
  square(100, 350, 50)
  square(100, 400, 50)
  square(100, 400, 50)
  square(50, 450, 50)
  square(50, 400, 50)
  square(50, 500, 50)
  square(50, 550, 50)
  square(50, 600, 50)
  square(200, 50, 50)
  square(150, 50, 50)
  square(250, 50, 50)
  square(250, 100, 50)
  square(250, 150, 50)
  square(250, 200, 50)
  square(250, 250, 50)
  square(250, 300, 50)
  square(250, 350, 50)
  square(250, 400, 50)
  square(200, 400, 50)
  square(200, 450, 50)
  square(250, 400, 50)
  square(150, 500, 50)
  square(200, 500, 50)
  square(100, 600, 50)
  square(150, 600, 50)
  square(200, 600, 50)
  square(250, 600, 50)
  square(300, 600, 50)
  square(300, 550, 50)
  square(300, 500, 50)
  square(250, 600, 50)
  square(350, 500, 50)
  square(350, 450, 50)
  square(350, 400, 50)
  square(350, 350, 50)
  square(350, 300, 50)
  square(350, 250, 50)
  square(350, 200, 50)
  square(350, 150, 50)
  square(400, 150, 50)
  square(300, 50, 50)
  square(350, 50, 50)
  square(400, 50, 50)
  square(450, 50, 50)
  square(500, 50, 50)
  square(550, 50, 50)
  square(550, 100, 50)
  square(550, 150, 50)
  square(450, 150, 50)
  square(550, 200, 50)
  square(450, 200, 50)
  square(550, 250, 50)
  square(450, 250, 50)
  square(550, 300, 50)
  square(450, 300, 50)
  square(550, 350, 50)
  square(450, 350, 50)
  square(550, 400, 50)
  square(550, 450, 50)
  square(500, 450, 50)
  square(450, 450, 50)
  square(450, 500, 50)
  square(350, 600, 50)
  square(400, 600, 50)
  square(450, 600, 50)
  square(500, 600, 50)
  square(550, 600, 50)
  square(550, 550, 50)
  square(600, 550, 50)
  square(650, 550, 50)
  square(650, 500, 50)
  square(650, 450, 50)
  square(650, 400, 50)
  square(650, 350, 50)
  square(650, 300, 50)
  square(700, 300, 50)
  square(700, 200, 50)
  square(650, 200, 50)
  square(600, 200, 50)
  text("exit", 670, 280);
  text("entrance", 100, 35)
  noFill();
  stroke(0);
  
 
  
   if (mouseIsPressed){
   background(0)

     
    stroke(map(mouseX, 0, 600, 0, 255, true), 330)
   //draw second line// line(width - mouseX, height - mouseY,width - pmouseX,height- pmouseY);
   // line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);
     
  } 
  
}
function keyTyped(){

  if(key==='c')
  {resetSketch();
  
   
  }
  
  
  
   // console.log(`key ${key} was hit`)
     if (key === 'j'){
       //save image
       saveCanvas('fileName', 'jpg');
     } else if (key === 'd'){
       //display image
    background(200, 300, 500);  //------background re-appear-------------------//
   //--------------------logging array-------------------//    
       // console.log(array[0]);
      // console.log(array[0] [1]);
     beginShape();
       for(let i = 0; i < array.length-1; i++){
      // line(array[i] [0], array[i] [1], array[i + 1] [0], array[i + 1] [1])
         curveVertex(array[i] [0], array[i] [1])
       }
       endShape();
     }
  
  return false;
}









