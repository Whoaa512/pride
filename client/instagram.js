var markersArray = [];
var instaArray = [];
var nextUrl = 'https://api.instagram.com/v1/tags/pride/media/recent/?client_id=5e0853f0059e468385b191afe5e4400b&count=40';

function getNewPhotos() {
  $.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: nextUrl,
    success: function(data) {
      nextUrl = data.pagination.next_url;
      render(data);
    }
  });
}

function render(data) {
  var data = data.data;
  $.each(data, function(ind, val) {
    $('#photoBoard').prepend("<img class='pridePic' src='" + val.images.low_resolution.url + "'></img>");
  });
}

Template.navBar.events({
  'click .btn': _.throttle(function(e) {
      getNewPhotos();
    }, 500)
});

Meteor.startup(function () {
  getNewPhotos();
});
