class MyPupils{
  constructor(x = width, y = height){
    this.x = x;
    this.y = y;
  }
  leftpupil(){
    //getting mic level
    micLevel = mic.getLevel();

    //color change
    //setting map to get the blue colros to vary
    let r = (map(micLevel, 0, 1, 0, 133))*15;
    let g = (map(micLevel, 0, 1, 0, 255))*15;
    let b = (map(micLevel, 0, 1, 0, 245))*15;

    //declare fill color and stroke size
    fill(133, 255, 245);
    stroke(1);
    strokeWeight(3);

    //audio reacting eyes
    eyelid.display();

    //pupils - left to right
      noStroke();
      fill(200, 300, 300);
      quad(x*.3, y*.26, 
           x*.33, y*.3, 
           x*.3, y* .34, 
           x*.27, y*.3);

    //moving pupil parts
      /*push();
        translate(-120,-120);
        fill(200, 300, 300);
        quad(mouseX+(width*.1), mouseY+(height*.26), 
           mouseX+(width*.13), mouseY+(height*.3), 
           mouseX+(width*.1), mouseY+(height* .34), 
           mouseX+(width*.07), mouseY+(height*.3));
      pop();*/

      noFill();
      stroke(1);
      strokeWeight(3);

    //the audio reacting eyes
    eyelid.display();
  }
  
  rightpupil(){
    //getting mic level
    micLevel = mic.getLevel();

    //color change
    //setting map to get the blue colros to vary
    let r = (map(micLevel, 0, 1, 0, 133))*15;
    let g = (map(micLevel, 0, 1, 0, 255))*15;
    let b = (map(micLevel, 0, 1, 0, 245))*15;

    //declare fill color and stroke size
    fill(133, 255, 245);
    stroke(1);
    strokeWeight(3);

    //pupils - left to right
      noStroke();
      fill(200, 300, 300);

      quad(x*.7, y*.26,
           x*.67, y*.3,
           x*.7, y*.34,
           x*.73, y*.3);

    //moving pupil parts
    /*let lte = map(mouseX, 0, 400, 24, 36)
      push();
        translate(-279,-130);
        fill(200, 300, 300);
        quad(mouseX+(x*.7), mouseY+(y*.26),
           mouseX+(x*.67), mouseY+(y*.3),
           mouseX+(x*.7), mouseY+(y*.34),
           mouseX+(x*.73), mouseY+(y*.3));
        if(mouseX >= x*.34){
          mouseX == x*.34
        }
      pop();*/

      noFill();
      stroke(1);
      strokeWeight(3);

    //the audio reacting eyes
    eyelid.display();
  }
}