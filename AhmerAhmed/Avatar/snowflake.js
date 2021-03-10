class MySnowFlake{
  constructor(x = width, y = height){
    this.x = x;
    this.y = y;
  }
  //right snowflake
  rightflake(){
    ///set color to respond to audio
    //setting map to get the blue colors to vary
    let r = (map(micLevel, 0, .13, 0, 133));
    let g = (map(micLevel, 0, .13, 0, 255));
    let b = (map(micLevel, 0, .13, 0, 245));

    //right snowflake
    fill(r, g, b)
    beginShape();
    vertex(x * .68, y * .52)  //top
    vertex(x * .7, y * .59)
    vertex(x * .72, y * .61)
    vertex(x * .77, y * .62)  //right
    vertex(x * .72, y * .63)
    vertex(x * .7, y * .65)
    vertex(x * .68, y * .72)  //bottom
    vertex(x * .66, y * .65)
    vertex(x * .64, y * .63)
    vertex(x * .59, y * .62)  //left
    vertex(x * .64, y * .61)
    vertex(x * .66, y * .59)
    endShape(CLOSE);

    //right flake - top to bottom
    fill(30)
    beginShape();
    vertex(x*.68, y*.53)
    vertex(x*.69, y*.59)
    vertex(x*.71, y*.61)
    vertex(x*.7, y*.615)
    vertex(x*.685, y*.59)
    vertex(x*.68, y*.57)
    vertex(x*.675, y*.59)
    vertex(x*.66, y*.615)
    vertex(x*.65, y*.61)
    vertex(x*.67, y*.59)
    endShape(CLOSE);

    beginShape();
    vertex(x*.68, y*.71)
    vertex(x*.69, y*.65)
    vertex(x*.71, y*.63)
    vertex(x*.7, y*.625)
    vertex(x*.685, y*.65)
    vertex(x*.68, y*.67)
    vertex(x*.675, y*.65)
    vertex(x*.66, y*.625)
    vertex(x*.65, y*.63)
    vertex(x*.67, y*.65)
    endShape(CLOSE);
  }
  
  leftflake(){
    //set color to respond to audio
    //setting map to get the blue colors to vary
    let r = (map(micLevel, 0, .13, 0, 133));
    let g = (map(micLevel, 0, .13, 0, 255));
    let b = (map(micLevel, 0, .13, 0, 245));


    //left snowflake
    noStroke();
    fill(r, g, b)
    beginShape();
    vertex(x * .32, y * .52)
    vertex(x * .3, y * .59)
    vertex(x * .28, y * .61)
    vertex(x * .23, y * .62)
    vertex(x * .28, y * .63)
    vertex(x * .3, y * .65)
    vertex(x * .32, y * .72)
    vertex(x * .34, y * .65)
    vertex(x * .36, y * .63)
    vertex(x * .41, y * .62)
    vertex(x * .36, y * .61)
    vertex(x * .34, y * .59)
    endShape(CLOSE);

    //left black flake - top to bottom
    fill(30)
    beginShape();
    vertex(x*.32, y*.53)
    vertex(x*.33, y*.59)
    vertex(x*.35, y*.61)
    vertex(x*.34, y*.615)
    vertex(x*.325, y*.59)
    vertex(x*.32, y*.57)
    vertex(x*.315, y*.59)
    vertex(x*.3, y*.615)
    vertex(x*.29, y*.61)
    vertex(x*.31, y*.59)
    endShape(CLOSE);

    beginShape();
    vertex(x*.32, y*.71)
    vertex(x*.33, y*.65)
    vertex(x*.35, y*.63)
    vertex(x*.34, y*.625)
    vertex(x*.325, y*.65)
    vertex(x*.32, y*.67)
    vertex(x*.315, y*.65)
    vertex(x*.3, y*.625)
    vertex(x*.29, y*.63)
    vertex(x*.31, y*.65)
    endShape(CLOSE);
  }
}