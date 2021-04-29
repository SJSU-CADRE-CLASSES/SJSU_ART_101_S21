
function Cell(x, y, w) {

  this.x = x;
  this.y = y;
  this.w = w;

  this.colorIn = true;

  this.revealed = false;

}

Cell.prototype.show = function() {
  stroke(0);
  noFill();
  rect(this.x, this.y, this.w, this.w);
if (this.revealed){
  if(this.colorIn) {
  // var r = random(0, 255);
  // var g = random(0, 255);
  // var b = random(0, 255);
  //
  //   fill(r, g, b)
  fill(0)
    rect(this.x, this.y, this. w, this. w);

  }

}
}



Cell.prototype.contains = function (x, y) {
  return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w)
}
Cell.prototype.reveal = function () {
  this.revealed = true;
}
