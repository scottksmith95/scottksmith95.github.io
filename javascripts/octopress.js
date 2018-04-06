// iOS scaling bug fix
// Rewritten version
// By @mathias, @cheeaun and @jdalton
// Source url: https://gist.github.com/901295
(function(doc) {
  var addEvent = 'addEventListener',
      type = 'gesturestart',
      qsa = 'querySelectorAll',
      scales = [1, 1],
      meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];
  function fix() {
    meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
    doc.removeEventListener(type, fix, true);
  }
  if ((meta = meta[meta.length - 1]) && addEvent in doc) {
    fix();
    scales = [0.25, 1.6];
    doc[addEvent](type, fix, true);
  }
}(document));

(function($){
  $.fn.scrollFixed = function() {
    var element = $(this);
    var distanceTop = element.offset().top;

    $(window).scroll(function() {
      if($(window).scrollTop() > distanceTop)
        element.css({'position':'fixed', 'top':'5px'});
      else {
        element.css({'position':'static'});
        distanceTop = element.offset().top;
      }
    });
  };
})(jQuery);

$(document).ready( function(){
  $("#newsletter").scrollFixed();
});