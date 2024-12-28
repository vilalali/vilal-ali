// Returns true if the specified element has been scrolled into the viewport.
function isElementInViewport(elem) {
    var $elem = $(elem);

    // Check if $elem exists and has offset
    if ($elem.length === 0 || !$elem.offset()) {
        return false;
    }

    // Get the scroll position of the page.
    var scrollElem = (navigator.userAgent.toLowerCase().indexOf('webkit') !== -1) ? 'body' : 'html';
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round($elem.offset().top);
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
function checkAnimation() {
    $(".Web,.Graphics,.Developing,.Photoshop,.Photography").each(function () {
        var $elem = $(this);

        if (isElementInViewport($elem)) {
            // Start the animation
            $elem.addClass('start');
        } else {
            $elem.removeClass('start');
        }
    });
}

// Capture scroll events
$(window).on('scroll', function () {
    checkAnimation();
});

// Run the checkAnimation once on page load in case elements are already in the viewport.
$(document).ready(function () {
    checkAnimation();
});
