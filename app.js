const navBar = document.querySelector("header");

window.onscroll = function() {scrollEffect()}

function scrollEffect() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        navBar.classList.add("scrolled");
    }
    else {
        navBar.classList.remove("scrolled");
    }
}