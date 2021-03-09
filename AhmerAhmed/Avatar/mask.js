//function creates blue lines of the mask and the small triangles inbetween the blue lines
class MyMask{
  constructor(x = width, y = height){
    this.x = x;
    this.y = y
  }
  display(){
    //color change
    //setting map to get the blue colros to vary
    let r = map(micLevel, 0, .13, 0, 133);
    let g = map(micLevel, 0, .13, 0, 255);
    let b = map(micLevel, 0, .13, 0, 245);

    //gas mask dark grey color
    noStroke();
    fill(30);
    beginShape();
    vertex(x*.5, y*.22);   //top part
    vertex(x*.56, y*.3);
    vertex(x*.72, y*.45);
    vertex(x*.69, y*.55);  //touches circle
    vertex(x*.7, y*.66);
    vertex(x*.53, y*.8);
    vertex(x*.47, y*.8);   //bottom left
    vertex(x*.3, y*.66);
    vertex(x*.31, y*.55);
    vertex(x*.28, y*.45);
    vertex(x*.44, y*.3);
    endShape(CLOSE);

    //shapes next to blue lines - top shape then bottom shape
    fill(r, g, b);
    triangle(140, 175, 180, 126, 120, 180);
    beginShape();
    vertex(x*.3, y*.45);
    vertex(x*.425, y*.625);
    vertex(x*.315, y*.55);
    endShape(CLOSE);
    triangle(260, 175, 220, 126, 280, 180);
    beginShape();
    vertex(x*.7, y*.45);
    vertex(x*.575, y*.625);
    vertex(x*.685, y*.55);
    endShape(CLOSE);

    //blue lines of chin
    beginShape();
    vertex(x * .47, y * .8);  //bottom left
    vertex(x * .53, y * .8);
    vertex(x * .7, y * .66);
    vertex(x * .7, y * .63);
    vertex(x * .53, y * .77);
    vertex(x * .47, y * .77);
    vertex(x * .35, y * .67);
    vertex(x * .3, y * .66);
    endShape(CLOSE);

    //blue lines of nose
    beginShape();
    vertex(x * .36, y * .53);
    vertex(x * .37, y *.46);
    vertex(x * .5, y * .3);
    vertex(x * .63, y * .46);
    vertex(x * .64, y * .53);
    vertex(x * .68, y * .55);
    vertex(x * .67, y * .46);
    vertex(x * .5, y * .25);
    vertex(x * .33, y * .46);
    vertex(x * .32, y * .55);
    endShape(CLOSE);

    //blue lines encircle lines - ride side then left
    beginShape();
    vertex(x*.5, y*.22);   //bottom top part
    vertex(x*.56, y*.3);
    vertex(x*.72, y*.45);
    vertex(x*.69, y*.55);
    vertex(x*.75, y*.45);  //touches circle
    vertex(x*.57, y*.295)
    vertex(x*.5, y*.2);    //top part
    vertex(x*.43, y*.295);
    vertex(x*.25, y*.45);
    vertex(x*.31, y*.55);
    vertex(x*.28, y*.45);
    vertex(x*.44, y*.3);
    endShape(CLOSE);

    //blue lines on the neck
    noStroke();
    beginShape();
    vertex(x*.33, y*.7);
    vertex(x*.33, y*.9);
    vertex(x*.09, y*1);
    vertex(x*.18, y*1);
    vertex(x*.35, y*.93);
    vertex(x*.5, y*1.06);
    vertex(x*.65, y*.93);
    vertex(x*.82, y*1);
    vertex(x*.91, y*1);
    vertex(x*.67, y*.9);
    vertex(x*.67, y*.7);
    vertex(x*.63, y*.72);
    vertex(x*.63, y*.9);
    vertex(x*.5, y*1.01);
    vertex(x*.37, y*.9);
    vertex(x*.37, y*.72);
    endShape(CLOSE);

    beginShape();
    vertex(x*.5, y*.32);
    vertex(x*.52, y*.39);
    vertex(x*.55, y*.43);
    vertex(x*.62, y*.46);
    vertex(x*.55, y*.49);
    vertex(x*.53, y*.53);
    vertex(x*.53, y*.68);
    vertex(x*.6, y*.7);
    vertex(x*.515, y*.757);
    vertex(x*.5, y*.7)
    vertex(x*.485, y*.757);
    vertex(x*.4, y*.7);
    vertex(x*.47, y*.68);
    vertex(x*.47, y*.53);
    vertex(x*.45, y*.49);
    vertex(x*.38, y*.46);
    vertex(x*.45, y*.43);
    vertex(x*.48, y*.39); 
    endShape(CLOSE);

    fill(30);
    beginShape();
    vertex(x*.5, y*.35);
    vertex(x*.51, y*.39);
    vertex(x*.54, y*.44);
    vertex(x*.53, y*.46);
    vertex(x*.515, y*.44);
    vertex(x*.5, y*.4);
    vertex(x*.485, y*.44);
    vertex(x*.47, y*.46);
    vertex(x*.46, y*.44);
    vertex(x*.49, y*.39);
    endShape(CLOSE);

    beginShape();
    vertex(x*.535, y*.48)
    vertex(x*.54, y*.49);
    vertex(x*.52, y*.53);
    vertex(x*.52, y*.685);
    vertex(x*.58, y*.703);
    vertex(x*.52, y*.743);
    vertex(x*.5, y*.67);
    vertex(x*.48, y*.743);
    vertex(x*.42, y*.703);
    vertex(x*.48, y*.685);
    vertex(x*.48, y*.53);
    vertex(x*.46, y*.49);
    vertex(x*.465, y*.48);
    vertex(x*.49, y*.52);
    vertex(x*.5, y*.58);
    vertex(x*.51, y*.52);
    endShape(CLOSE);
  }
}