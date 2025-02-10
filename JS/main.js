$(function () {
    $(".my-workshop-list").slideUp();
    $("#certificates").slideUp();
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
    $("#certificate-button").click(function () {
        $("#certificates").slideDown("slow");
        document.getElementById("certificates").scrollIntoView();
        $("#certificates-header").addClass("certificates-animation-open");
        $(".certificates-container").addClass("certificates-animation-open");
        // $("#certificates-header").removeClass("certificates-animation-close");
        // $(".certificates-container").removeClass("certificates-animation-close");
    });
    $("#close-certificates").click(function () {
        $("#certificates").slideUp("slow");
        // $("#certificates-header").addClass("certificates-animation-close");
        // $(".certificates-container").addClass("certificates-animation-close");
        // $("#certificates-header").removeClass("certificates-animation-open");
        // $(".certificates-container").removeClass("certificates-animation-open");
    });
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
