// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    // Map container
    $('.map-container').click(function(){
			$(this).find('iframe').addClass('clicked')
    }).mouseleave(function(){
			$(this).find('iframe').removeClass('clicked')
    });

    // Gift animation
    $('#gift').click(function() {
        if (!$('.gift-text').is(":visible")) {
            $('#gift-subhead').slideUp(400);
            $(this).animate({
                width: $(this).width() / 5,
                'margin-top': '30px'
            }, 400);
            $('.gift-text').slideDown(400);
        }
    });

})(jQuery); // End of use strict
