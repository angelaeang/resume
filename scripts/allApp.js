mainTiming = 0.65;

$(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
        gsap.to("#nav", 
            {
                duration: mainTiming, 
                y: 0,
            }
        );
        // up.to(
        //     "#nav",
        //     mainTiming,
        //     {y: 0, ease: Power4.easeInOut}
        // )
    }
    else {
        gsap.to("#nav", 
            {
                duration: mainTiming, 
                y: -100,
            }
        );
    }
});