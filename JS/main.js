$(function () {
    $(".my-workshop-list").slideUp();
    if ($(window).width() < 445) {
        $(".nav-links").slideUp();
    }
    $("#my-workshop").click(function () {
        $(".my-workshop-list").css("visibility", "visible");
        $(".my-workshop-list").slideToggle("fast");
    });
    $(".hamburger").click(function () {
        $(".nav-links").css("visibility", "visible");
        $(".nav-links").slideToggle("fast");
    });
    contactAnimation();
})

function contactAnimation() {
    const contactLinks = document.querySelectorAll(".contacts a");
    var timing = 1500;
    for (let i = 0; i < contactLinks.length; i++) {
        contactLinks[i].style.animationName = 'pop-up-contacts'
        contactLinks[i].style.animationTimingFunction = 'cubic-bezier(1, 0, 0, 1)'
        contactLinks[i].style.animationDuration = `${timing}ms`
        timing += 120
    }
}