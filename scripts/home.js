/******************** HOMEPAGE SCRIPTS ********************/
var numTest = 1;
function scrollTestimonials() {

  $testimonials = $('.testimonials');

  setInterval(function() {
    fadeOut($('#test' + numTest)); // fade out old
    numTest = (numTest % 7) + 1; // increment

    setTimeout(function() {
      fadeIn($('#test' + numTest)); // fade in new
    }, 250);
  }, 5000);
}

function initTestimonials() {
  $testimonials = $('.testimonials');
    // hide all tabs
  $testimonials.css('display', 'none');

  // only show tab 1
  $('#test1').removeAttr('style');
}

$(document).ready(function() {
  initTestimonials();
  scrollTestimonials();
});
