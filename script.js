$(document).ready(function () {
    //ADDING STICKY NAV
    $('.js--about-section').waypoint(function (direction) {
        if(direction == "down") {
            $('nav').addClass("sticky-nav");
        } else  {
            $('nav').removeClass("sticky-nav");
        }
    });
    //ADDING ANIMATION CONTINED

    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
    
//    ANIMATION ON SCROLL
    $('.js--about-section').waypoint(function (direction) {
        $('.js--about-box').addClass('animate__animated animate__fadeIn')
    }, {
        offset: '50%'
    });
    

    $('.js--service-section').waypoint(function (direction) {
        $('.js--service-box').addClass('animate__animated animate__zoomIn')
    }, {
        offset: '50%'
    });
    $('.js--package-section').waypoint(function (direction) {
        $('.js--package-box').addClass('animate__animated animate__pulse')
    });
});
