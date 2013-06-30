var adjustModal = function($modal) {
  var $window = $(window),
    fixed = $modal.css('position') == 'fixed',
    top = ($window.height() - $modal.height()) / 2;

  if ($window.width() <= 767 && $modal.height() >= $window.height() - 10) {
    top = $window.scrollTop() + 10;
  } else if (!fixed) {
    top += $window.scrollTop();
  }

  $modal.stop().animate({
    'top': top
  }, "fast");
};

var show = function() {
  var $modal = $(this);
  adjustModal($modal);
};

var checkShow = function() {
  $('.modal').each(function() {
    var $modal = $(this);
    if ($modal.css('display') !== 'block') return;
    adjustModal($modal);
  });
};

var modalWindowResize = function() {
  $('.modal').not('.modal-gallery').on('show', show).on('loaded', show);
  $('.modal-gallery').on('displayed', show);
  checkShow();
};

$(modalWindowResize);
$(window).resize(modalWindowResize);
