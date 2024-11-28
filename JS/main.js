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

    const image = document.getElementsByTagName("img");
    image.setAttribute("draggable", "false");
    image.oncontextmenu = function () {
        return false
    }
})