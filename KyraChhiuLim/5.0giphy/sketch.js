//giphy search path
var api = "https://api.giphy.com/v1/gifs/search?";
//api key from dashboard
var apiKey = "&api_key=i411tUfDR0kdyw5vBUXHeki3NmAKbdrU";
//what gifs i want to find; search query term/phrase
var query ="&q=visual+illusion";


function setup() {
  noCanvas();
  //combining variables to one url through code
  var url = api + apiKey + query;
  loadJSON(url, gotData);
}

function gotData(giphy) {
  //randomizing which gifs appear
  for (var i = 0; i < giphy.data.length; i++) {
  //loading gif
  createImg(giphy.data[i].images.original.url);
  }
}
