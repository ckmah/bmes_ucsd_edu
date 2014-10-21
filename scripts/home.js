/******************** HOMEPAGE SCRIPTS ********************/
var numTest = 1;
var tweetIndex = 0;

var tweets = [];
var tweetDates = [];

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

/**
 * Parse Twitter feed through retrieving tweets using custom Google Script that generates xml sheet.
 */
function parseTwitterRSS() {
    $.get('https://script.google.com/macros/s/AKfycbzu7bVSXrtsFL63OFkPPH5XwI3V8XzOm6JAiNf6zr1gac8y4Xg/exec?520445386310164480', function(data) {
        // find each item (tweet)
        $(data).find("item").each(function() {

            // limit to past 20 tweets
            if (tweets.length > 20)
                return;

            // reference to found item (tweet)
            var el = $(this);
            var title = "@" + el.find("title").text();
            var dateText = el.find("pubDate").text().split(' ');
            var date = "-";

            // date = day of the week, and date
            for (var index = 0; index < 4; index += 1)
                date = date + ' ' + dateText[index];
            // save tweet text
            tweets[tweets.length] = title;
            tweetDates[tweetDates.length] = date;
        });

        // setup initial
        $('#tweet_text').text(tweets[0]);
        $('#tweet_date').text(tweetDates[0]);
    });
}

/**
 * Setup twitter feed on front page to change every 10 seconds. Allow user to go back and next.
 */
function setupTwitterFeed() {
    $tweet = $('#tweet');
    $tweetText = $('#tweet_text');
    $tweetDate = $('#tweet_date');

    $tweetText.text(tweets[0]);
    $tweetDate.text(tweetDates[0]);

    setInterval(function() {
        tweetIndex = (tweetIndex + 1) % tweets.length; // increment
        changeTweet(tweetIndex);
    }, 10000);

    $('#twitter_feed #left_arrow').parent().click(function() {
        if (tweetIndex == 0)
            tweetIndex = tweets.length - 1; // decrement
        else
            tweetIndex = (tweetIndex - 1) % tweets.length; // decrement

        changeTweet(tweetIndex);
    });

    $('#twitter_feed #right_arrow').parent().click(function() {
        tweetIndex = (tweetIndex + 1) % tweets.length; // increment
        changeTweet(tweetIndex);
    });
}

/**
 * Change to specified tweet.
 */
function changeTweet(index) {
    $tweet = $('#tweet');
    $tweetText = $('#tweet_text');
    $tweetDate = $('#tweet_date');

    fadeOutSimple($tweet); // fade out old

    setTimeout(function() {
        $tweetText.text(tweets[tweetIndex]); // set as new tweet
        $tweetDate.text(tweetDates[tweetIndex]); // set as new tweet date
        fadeInSimple($tweet); // fade in new
    }, 250);
}

$(document).ready(function() {
    // initTestimonials();
    // scrollTestimonials();
    parseTwitterRSS();
    setupTwitterFeed();
});
