let petals = []; //array function that holds cherry blossom petals




//petal class
function petal() 
  {
  // initialize coordinates
      this.posX = 0;
      this.posY = random(-50, 0);
      this.initialangle = random(10, 0 * PI);
      this.size = random(6, 13);
      //ellipse(10, 20, 20, 7);

      this.radius = sqrt(random(pow(width / 1, 2)));
      this.update = function(time) {
   // x position follows a circle
        let w = 0.05; // angular speed
        let angle = w * time + this.initialangle;
        this.posX = width / 1 + this.radius * tan(angle);
   //calculates tangent of the angle the petals fall
        this.posY += pow(this.size, 0.3);

  // delete petal if past end of screen
        if (this.posY > height) {
          let index = petals.indexOf(this);
          petals.splice(index, 1);
}
  };
  this.display = function() {
    ellipse(this.posX, this.posY, 10, this.size);
  };
  }