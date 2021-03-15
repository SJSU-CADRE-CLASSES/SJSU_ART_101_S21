class Ears {
  constructor(_Rotation) {
    this.rotation = _Rotation;
  }

  display() {
    //EARS
    //left ear
    push();
    translate(width * .3, height * .5);
    rotate(-(this.rotation));
    beginShape();
    vertex(width * -.2, height * -.05);
    vertex(width * .0, height * -.05);
    vertex(width * .0, height * .05);
    vertex(width * -.1, height * .05);
    endShape(CLOSE);
    pop();

    //shadow left ear
    push();
    fill(0, 0, 0, 30);
    translate(width * .3, height * .5);
    rotate(-(this.rotation));
    beginShape();
    vertex(width * -.2, height * -.05);
    vertex(width * -.075, height * -.0);
    vertex(width * -.04, height * .05);
    vertex(width * -.1, height * .05);
    endShape(CLOSE);
    pop();


    //right ear
    push();
    translate(width * .7, height * .5);
    rotate(this.rotation);
    beginShape();
    vertex(width * .2, height * -.05);
    vertex(width * .0, height * -.05);
    vertex(width * .0, height * .05);
    vertex(width * .1, height * .05);
    endShape(CLOSE);
    pop();

    //shadow right ear
    push();
    fill(0, 0, 0, 30);
    translate(width * .7, height * .5);
    rotate(this.rotation);
    beginShape();
    vertex(width * .2, height * -.05);
    vertex(width * .075, height * -.0);
    vertex(width * .04, height * .05);
    vertex(width * .1, height * .05);
    endShape(CLOSE);
    pop();
  }
}
