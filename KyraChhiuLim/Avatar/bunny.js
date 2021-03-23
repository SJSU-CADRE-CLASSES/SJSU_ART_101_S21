class Bunny {
    
  constructor (_r, _g, _b, _angleEye, _size, _rotation, _xPos, _yPos)
    {
    this.r = _r
    this.g = _g
    this.b = _b
    this.angleEye = _angleEye
    this.size = _size
    this.rotation = _rotation
    this.xPos = _xPos
    this.yPos = _yPos
  }
  
  display()
    {
    this.drawHeadshape(this.r, this.g, this.b);
    this.drawEyes();
    this.drawPupils(this.angleEye);
    this.drawSnout(this.size);
    this.drawEars();
    this.drawBlush();
    this.drawNose (); 
    this.drawMouth ();
      }
  
       drawHeadshape(r, g, b) 
        {

            //draw bunny headshape
            fill(r,g,b);
            noStroke();
            beginShape();
            vertex(width * 0.3 , height * 0.15);
            vertex(width * 0.45, height * 0.15);
            vertex(width * 0.45, height * 0.4);
            vertex(width * 0.55, height * 0.4);
            vertex(width * 0.55, height * 0.15)
            vertex(width * 0.7 , height * 0.15);
            vertex(width * 0.7 , height * 0.6);
            vertex(width * 0.75, height * 0.6);
            vertex(width * 0.75, height * 0.75);
            vertex(width * 0.7 , height * 0.8);
            vertex(width * 0.3 , height * 0.8);
            vertex(width * 0.3 , height * 0.8);
            vertex(width * 0.25 , height * 0.75);
            vertex(width * 0.25 , height * 0.6);
            vertex(width * 0.3 , height * 0.6);
            endShape(CLOSE);
          }

       drawEyes() 
        {

             //eyes
            fill(250, 100, 220);
            rect(width * 0.35, height *0.53, 45, 30, 10);
            rect(width * 0.54, height *0.53, 45, 30, 10);

}

      drawPupils(angleEye) 
        {
             //pupils
            push(); 
            rotate(angleEye);
            fill(255)
            circle(width * 0.43, height * 0.56, 20);
            circle(width * 0.62, height * 0.56, 20);
            circle(width * 0.38, height * 0.58, 12);
            circle(width * 0.57, height * 0.58, 12);
            pop();

          }

       drawSnout(size)
        {
            //snout
            fill(255);
            push();
            circle( width * 0.5, height * 0.7, size);
            pop();
          }
  
       drawEars() 
        {
            //ears
            fill(255)
            rect(width * 0.35, height * 0.19, 18, 80);
            rect(width * 0.6, height * 0.19, 18, 80);

}

       drawBlush()
        {
          //blush
          fill(250, 175, 230);
          rect (width * 0.28, height * 0.64, 40, 20, 10);
          rect (width * 0.625, height * 0.64, 40, 20,10);
        }

       drawNose () 
        {

          // draw nose
          fill(250, 100, 220)
          push();
          beginShape();
          vertex (width * 0.47, height * 0.65);
          vertex (width * 0.53, height * 0.65); 
          vertex (width * 0.5, height * 0.69);
          endShape(CLOSE);

          pop();
        }

       drawMouth ()
        {
          fill (250, 90, 250);
          arc(200, 290, 30, 20, 180,360);
          arc(200, 290 + space, 30, 20, 0,180);
          fill(255);
          triangle(200,287,190,280,210,280)
        }
  
       

    }