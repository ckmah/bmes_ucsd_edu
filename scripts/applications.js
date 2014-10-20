function initApplications() {
    var $groups = $('.group');
    var $pages = $('.apage');

    for (var i = 0; i < $groups.length; i = i + 1) {
        $groups[i].setAttribute('data-index', i + 1);
        $pages[i].setAttribute('id', 'apage' + (i + 1));
    }
    groupClick($('.group:first'));
}

function animApplications() {
    var $groups = $('.group');
    var $pages = $('.apage');

    $groups.click(function() {
        groupClick($(this));
    });

    $groups.children().click(function() {
        groupClick($(this).parent());
    });

}

function groupClick($this) {
    var $pages = $('.apage');
    $('.group').children('img').removeClass('activegroup');
    $this.children('img').addClass('activegroup');
    fadeOutSimple($pages);

    setTimeout(function() {
        $pages.removeClass('activepage');
        $('#apage' + $this.attr('data-index')).addClass('activepage');
        fadeInSimple($('#apage' + $this.attr('data-index')));
    }, 300);
}

$(document).ready(function() {
    initApplications();
    animApplications();
});
