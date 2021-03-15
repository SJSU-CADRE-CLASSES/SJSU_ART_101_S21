//capitalize the name of class
class Wave {
  constructor(_c1,_c2,_c3,_xPos,_yPos){
    this.c1 = _c1;
    this.c2 = _c2;
    this.c3 = _c3;
    this.xPos = _xPos;
    this.yPos = _yPos;
    
    this.c2 = 230;
    this.c3 = 255;
  
  }
  
  display () { 
  fill(this.c1,this.c2,this.c3);
  stroke(255);
  push();
  translate(this.xPos,this.yPos);
  strokeWeight(1);
  beginShape();
  curveVertex(waveLength*-3, waveHeight);
  curveVertex(waveVariable*-2, waveHeight+20);
  curveVertex(waveLength*-1, waveHeight);
  curveVertex(waveVariable*0,  waveHeight+20);
  curveVertex(waveLength,    waveHeight);
  curveVertex(waveVariable*2,  waveHeight+20);
  curveVertex(waveLength*3,  waveHeight);
  curveVertex(waveVariable*4,  waveHeight+20);
  curveVertex(waveLength*5,  waveHeight);
  curveVertex(waveVariable*6,  waveHeight+20);
  curveVertex(waveLength*7,  waveHeight);
  curveVertex(waveVariable*8,  waveHeight+20);
  curveVertex(waveLength*9,  waveHeight);
  curveVertex(waveVariable*10, waveHeight+20);
  curveVertex(waveLength*11, waveHeight);
  curveVertex(waveVariable*12, waveHeight+20);
  curveVertex(waveLength*13, waveHeight);
  curveVertex(waveVariable*14, waveHeight+20);
  curveVertex(waveLength*15, waveHeight);
  curveVertex(waveVariable*16, waveHeight+20);
  curveVertex(waveLength*17, waveHeight);
  curveVertex(waveVariable*18, waveHeight+20);
  curveVertex(waveLength*19, waveHeight);
  curveVertex(waveVariable*20, waveHeight+20);
  curveVertex(waveLength*21, waveHeight);
  curveVertex(waveVariable*22, waveHeight+20);
  curveVertex(waveLength*23, waveHeight);
  curveVertex(waveVariable*24, waveHeight+20);
  curveVertex(waveLength*25, waveHeight);
  curveVertex(waveVariable*26, waveHeight+20);
  curveVertex(waveLength*27, waveHeight);
  curveVertex(waveVariable*28, waveHeight+20);
  curveVertex(waveLength*29, waveHeight);
  curveVertex(waveVariable*30, waveHeight+20);
  curveVertex(waveLength*31, waveHeight);
  endShape();
    pop();
  }
  
  move () {
    //change the color as they move
    this.c1 += 0.2; 
    if (this.c1 >= 255){
      this.c1 =  200;
    }
    
    this.c2 += 0.2; 
    if (this.c2 >= 255){
      this.c2 = 200;
    }
    
    this.c3 += 0.2;
    if (this.c3 >= 255){
      this.c3 = 200;
    }
    
    //move the wave
    if(this.xPos <= width*0.8) {
       //this.yPos = this.yPos + 2; equal to += 2
    this.xPos += 0.7;
    } else {
      this.xPos = -width * 0.5;
    }
    
   
  }
}