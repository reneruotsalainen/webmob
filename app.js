const navBar = document.querySelector("header");
const top_button = document.getElementById("b2t");

document.onscroll = function() {scroll()}

function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        top_button.style.display = "block";
    }
    else {
        top_button.style.display = "none";
    }   
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}