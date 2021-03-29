 class Background {
   constructor(xPos, yPos){
     this.xPos = xPos;
     this.yPos = yPos;
     
   }
   
   display(){
     push();
     translate (this.xPos, 0)
     fill(245)
     rect(width *0, width * 0, width *.025, width * 1);
     pop();
     
   }
   
   
 move(){
   if (this.xPos <= width){
     this.xPos += 2;
   } else if (this.xPos > width) {
     this.xPos = 0;
   }
   
 }
   
 }

