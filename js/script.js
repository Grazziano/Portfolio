$(document).ready(function() {
    $("#slides").superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Web Developer", "PHP", "Laravel", "Student"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });
});