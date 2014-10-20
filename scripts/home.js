/******************** HOMEPAGE SCRIPTS ********************/
var numTest = 1;
var tweets = [];

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
    console.log("Parsing Twitter Feed...");
    $.get('https://script.google.com/macros/s/AKfycbzu7bVSXrtsFL63OFkPPH5XwI3V8XzOm6JAiNf6zr1gac8y4Xg/exec?520445386310164480', function(data) {
        // find each item (tweet)
        $(data).find("item").each(function() {

            // limit to past 20 tweets
            if (tweets.length > 20)
                return;

            // reference to found item (tweet)
            var el = $(this);
            var title = el.find("title").text();

            // save tweet text
            tweets[tweets.length] = title;
        });
    });
}

$(document).ready(function() {
    initTestimonials();
    scrollTestimonials();
    parseTwitterRSS();
});
