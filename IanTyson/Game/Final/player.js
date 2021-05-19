
class Player {
  constructor(){
    this.r = 50;
    this.x = w/2;
    this.y = h-this.r - 10;
    this.speed = 2;
    this.direction = 'still';
  }

display(){
  //player (replace with an image)
  image(img4, this.x, this.y);
}
move(){
switch (this.direction){
  case 'still':
  //dont move
break;
case 'left':
//decrease x pos
this.x -= this.speed
break;
case 'right':
//increase x pos
this.x += this.speed
break;
default:
break;
}
}

}
