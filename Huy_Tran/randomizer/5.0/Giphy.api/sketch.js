//=====================DECLARE VARIABLES FOR STRING=========================//
var api = 'https://api.giphy.com/v1/gifs/search?';//Choose a resource, api_key goes after question mark.
var apiKey = '&api_key=LkzEHbCg2n0Zm9bvZcJE6ThXZdOc6F6q';// art01 key
var query = '&q=unicorn';//q is a query to show the keyword want to display


function setup() {
  noCanvas();
  var url = api + apiKey + query;//define URL with 3 variables above to show s string
  loadJSON(url, gotData);// load URL after got data
}

function gotData(giphy) {
  // create a image source among data to display.
  //This shows the the path respesctively to show the image "rainbow"
  //-->https://api.giphy.com/v1/gifs/search?api_key=LkzEHbCg2n0Zm9bvZcJE6ThXZdOc6F6q&q=rainbow

  for (var i = 0; i < giphy.data.length; i++) {
    createImg(giphy.data[i].images.original.url);
  }
}
