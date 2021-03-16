class Horns {
  constructor() {
  }

  display() {

    //left horn
    beginShape();
    vertex(width * .0, height * .0);
    vertex(width * .1, height * .05);
    vertex(width * .1, height * .15);
    vertex(width * .15, height * .2);
    vertex(width * .2, height * .2);
    vertex(width * .3, height * .1);
    vertex(width * .35, height * .15);
    vertex(width * .3, height * .25);
    vertex(width * .35, height * .3);
    vertex(width * .35, height * .4);
    vertex(width * .2, height * .4);
    vertex(width * .1, height * .3);
    vertex(width * .0, height * .25);
    endShape(CLOSE);

    //right horn
    beginShape();
    vertex(width * 1.0, height * .0);
    vertex(width * .9, height * .05);
    vertex(width * .9, height * .15);
    vertex(width * .85, height * .2);
    vertex(width * .8, height * .2);
    vertex(width * .7, height * .1);
    vertex(width * .65, height * .15);
    vertex(width * .7, height * .25);
    vertex(width * .65, height * .3);
    vertex(width * .65, height * .4);
    vertex(width * .8, height * .4);
    vertex(width * .9, height * .3);
    vertex(width * 1.0, height * .25);
    endShape(CLOSE);
  }
}
