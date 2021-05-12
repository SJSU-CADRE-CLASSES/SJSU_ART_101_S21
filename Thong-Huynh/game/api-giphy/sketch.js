

var api = "https://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=gcaoIb9CTymckU90QO0UPei9ayAQ7HsJ";
var query = "&q=cherry+blossom";




function setup() {
  noCanvas();
  var url = api + apiKey + query;
  loadJSON(url, gotData);
}

function gotData(giphy) {
  for (var i = 0; i < giphy.data.length; i++){
    createImg(giphy.data[i].images.original.url);
  }
}

function draw() {

}
