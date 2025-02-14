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
    workshopNavigationsAnimation()
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
    workshop_openSource_hover();
    workshop_uiux_hover();
    workshop_3d_hover();
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
function workshopNavigationsAnimation() {
    const li = document.querySelectorAll(".navigations li");
    var timing = 1500;
    for (let i = 0; i < li.length; i++) {
        li[i].style.animationName = 'navigations-li'
        li[i].style.animationTimingFunction = 'cubic-bezier(1, 0, 0, 1)'
        li[i].style.animationDuration = `${timing}ms`
        timing += 150
    }
}

function workshop_openSource_hover() {
    const openSourceLi = document.querySelector("#open-source");
    const websitesLi = document.querySelector("#websites");

    openSourceLi.addEventListener("mouseenter", () => {
        websitesLi.style.top = "calc(var(--top) - 2.5%)";
        websitesLi.style.right = "calc((var(--top) / 16 + var(--right)) + 2.5%)";
    });

    openSourceLi.addEventListener("mouseleave", () => {
        websitesLi.style.top = "";
        websitesLi.style.right = "";
    });
}
function workshop_uiux_hover() {
    const uiux = document.querySelector("#ui-ux");
    const openSourceLi = document.querySelector("#open-source");
    const websitesLi = document.querySelector("#websites");

    uiux.addEventListener("mouseenter", () => {
        openSourceLi.style.top = "calc(var(--top) - 2.5%)";
        openSourceLi.style.right = "calc((var(--top) / 16 + var(--right)) - 1%)";
        websitesLi.style.top = "calc(var(--top) - 2.5%)";
        websitesLi.style.right = "calc((var(--top) / 16 + var(--right)) + 2.5%)";
    });

    uiux.addEventListener("mouseleave", () => {
        openSourceLi.style.top = "";
        openSourceLi.style.right = "";
        websitesLi.style.top = "";
        websitesLi.style.right = "";
    });
}
function workshop_3d_hover() {
    const modeling = document.querySelector("#modeling");
    const uiux = document.querySelector("#ui-ux");
    const openSourceLi = document.querySelector("#open-source");
    const websitesLi = document.querySelector("#websites");

    modeling.addEventListener("mouseenter", () => {
        uiux.style.top = "calc(var(--top) - 2.5%)";
        uiux.style.right = "calc((var(--top) / 16 + var(--right)) - 4%)";
        openSourceLi.style.top = "calc(var(--top) - 2.5%)";
        openSourceLi.style.right = "calc((var(--top) / 16 + var(--right)) - 1%)";
        websitesLi.style.top = "calc(var(--top) - 2.5%)";
        websitesLi.style.right = "calc((var(--top) / 16 + var(--right)) + 2.5%)";
    });

    modeling.addEventListener("mouseleave", () => {
        uiux.style.top = "";
        uiux.style.right = "";
        openSourceLi.style.top = "";
        openSourceLi.style.right = "";
        websitesLi.style.top = "";
        websitesLi.style.right = "";
    });
}