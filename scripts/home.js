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

function parseTwitterRSS() {
 $.get('https://script.google.com/macros/s/AKfycbzu7bVSXrtsFL63OFkPPH5XwI3V8XzOm6JAiNf6zr1gac8y4Xg/exec?520445386310164480', function(data) {
  $(data).find("entry").each(function() { // or "item" or whatever suits your feed
   var el = $(this);

   console.log("------------------------");
   console.log("title      : " + el.find("title").text());
   console.log("author     : " + el.find("author").text());
   console.log("description: " + el.find("description").text());
  });
 });
}

$(document).ready(function() {
 initTestimonials();
 scrollTestimonials();
 parseTwitterRSS();
});
