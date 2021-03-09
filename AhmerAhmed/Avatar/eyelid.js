class MyEyelid{
  constructor(x = width, y = height){
    this.x = x;
    this.y = y;
  }
  display(){
    //plot the points to move them
    let leyele = map(micLevel, 0, 1, x*.36, x*.38)
    let leyeri = map(micLevel, 0, 1, x*.24, x*.22)
    let leyeup = map(micLevel, 0, 1, y*.25, y*.2)
    let leyelo = map(micLevel, 0, 1, y*.35, y*.4)

    let reyele = map(micLevel, 0, 1, x*.64, x*.62)
    let reyeri = map(micLevel, 0, 1, x*.76, x*.78)
    let reyeup = map(micLevel, 0, 1, y*.25, y*.2)
    let reyelo = map(micLevel, 0, 1, y*.35, y*.4)

    //create the eyelids
    quad(x*.3, leyeup,
        leyeri, y*.3,
        x*.3, leyelo,
        leyele, y*.3);

    quad(x*.7, reyeup,
        reyeri, y*.3,
        x*.7, reyelo,
        reyele, y*.3);
  }
}