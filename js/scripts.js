$(document).ready(function () {

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    function scrollEvents() {
        $(".slide").each(function () {
            console.info($(this));
            if (isScrolledIntoView($(this))) {
                $(this).find(".slide").addClass("isthisworking");
            }
        });
    }

    scrollEvents();
    window.addEventListener('scroll', scrollEvents);
    window.addEventListener('resize', scrollEvents);

});