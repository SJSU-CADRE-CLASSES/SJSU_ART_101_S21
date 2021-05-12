
// 3 variables to create a complete gif link (where you will see datas from a query - search term)
var api = "https://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=gcaoIb9CTymckU90QO0UPei9ayAQ7HsJ";
var query = "&q=cherry+blossom";
// change words after &q= to look for the gif you want


// setup by creating a no canvas so the gifs will flow through page
// combine 3 vars above to 1 link - gif data link
function setup() {
  noCanvas();
  var url = api + apiKey + query;
  loadJSON(url, gotData);
}


// retreive data from the gif data link
// create number of images based on the amout of gifs the gif data link has
function gotData(giphy) {
  for (var i = 0; i < giphy.data.length; i++){
    createImg(giphy.data[i].images.original.url);
  }
}
