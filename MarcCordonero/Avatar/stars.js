DrawCircle.prototype = {
	constructor: DrawCircle,

  display: function() {
    fill(this.color);
    ellipse(this.xPos,this.yPos, this.diameter, this.diameter);

  },
  

  move: function() {
		this.yPos += this.speed;

    if (this.yPos - this.diameter/2 > height) {
    	this.yPos = -this.diameter/2;
    }
	}
}