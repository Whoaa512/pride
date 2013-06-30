var INSTAID = 'c28bc8730c734259aba3fd5c1946f073';
var markersArray = [];
var instaArray = [];

function getNewPhotos() {
  $.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: "https://api.instagram.com/v1/tags/pride/media/recent/?client_id=c28bc8730c734259aba3fd5c1946f073",
    success: function(data) {
      render(data);
    }
  });
}

function render(data) {
  var data = data.data;
  $.each(data, function(ind, val) {
    var photoSRC = val.images.low_resolution.url;
    console.log(photoSRC);
    $('#photoBoard').append("<img class='pridePic' src='" + photoSRC + "'></img>");
  });
}