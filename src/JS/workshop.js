
workshop_openSource_hover();
workshop_uiux_hover();
workshop_3d_hover();

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
function overlay(close = true) {
    const overLay = document.querySelector('.overlay');
    if (close == true) {
        $(overLay).fadeOut();
    } else {
        $(overLay).fadeIn();
    }
}