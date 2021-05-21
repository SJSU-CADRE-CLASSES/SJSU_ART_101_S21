
var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=2bygZO4uGeGthh8JiMYwQDLkxyws83vD";
var query ="&q=minions";
//the equation to the link site

function setup() {
  noCanvas();
  var url = api + apiKey + query;
  createCanvas(400, 400);
  loadJSON(url, gotData);
}

function gotData(giphy) {
  for (var i = 0; i < giphy.data.length; i++){
  createImg(giphy.data[0].images.original.url);
  //take path of giphy and create element to appear
}

}
