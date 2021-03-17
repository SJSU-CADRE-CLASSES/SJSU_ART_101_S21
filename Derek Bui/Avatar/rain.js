class rain {
  
  constructor(_x,_y ){
    x = _x;
    y = _y;
    
    
  }
  
  display(){
    
    noStroke;
  fill(255, 255, 255 );
  ellipse(40, y, 60, 150);
   ellipse(200, y, 60, 150);
    ellipse(350, y, 60, 150);
    ellipse(290, y, 60, 150);
    ellipse(120, y, 60, 150);
    ellipse(370, y, 60, 150);
    ellipse(60, y, 60, 150);
    ellipse(150, y, 60, 150);
    ellipse(400, y, 60, 150);
    
  }
  
  move(){
    
    if (y <= 550){
    
    y = y+10;
    } else if (y > 550){
      y = 0;
    }
    
  }
}