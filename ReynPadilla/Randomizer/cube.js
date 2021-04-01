class Cube {
constructor(_xPos, _yPos, _size) {
  this.xPos = _xPos;
  this.yPos = _yPos;
  this.size = _size;

}

display() {
  fill(255)
  square(this.xPos, this.yPos, this.size);  

        
  }
  
  move(){
        
    this.yPos += 2
    if (this.yPos > canvasHeight) {
      this.yPos = 0
    }
    
    
    
    
  }
  
  
}








// function drawIcecube(xPos, yPos, size) {
//   fill(255)
//   square(xPos, yPos, 455);
// }




