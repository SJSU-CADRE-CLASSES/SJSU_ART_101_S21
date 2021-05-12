// setting up the 3 variables I will combine to form the gif link
var api = "https://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=sZZFfYFeKsbGP9FNoexy9GeXhBqCvrYT";
var query = "&q=rainbow";

//function creating no canvas as well as combining the three variables to form the full link which I will use later
function setup() {
  noCanvas();
  var url = api + apiKey + query;
  loadJSON(url, gotData);
}

//this function parses i through an array of gifs taken from the URL created above, this allows us to go through the entire array of gifs to paste them all in
function gotData(giphy) {
  for(var i = 0; i < giphy.data.length; i++) {
  createImg(giphy.data[i].images.original.url);
  }
}