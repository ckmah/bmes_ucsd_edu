function showTab(section, element) {
  // console.log('#' + section + element.value);
  setTimeout(function() {
    $('.' + section).css('display', 'none')
  }, 200);
  $('.' + section).css('opacity', '0');

  setTimeout(function() {
    $('#' + section + element.value).css({
      'display': 'block',
      'opacity': '1'
    });
  }, 200);
}

// events jquery tab widget
$(document).ready(function() {

  // hide all tabs
  $('.tab').css({
    'display': 'none',
    'opacity': '0'
  });

  // only show tab 1
  $('#tab1').css({
    'display': 'block',
    'opacity': '1'
  });
});
