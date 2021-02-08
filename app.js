const navBar = document.querySelector("header");
const top_button = document.getElementById("b2t");

// navibar links
const link1 = document.getElementById("intro-link");
const link2 = document.getElementById("history-link");
const link3 = document.getElementById("distros-link");

// colors

const accent_color = "#53c73e"
 

document.onscroll = function() {scroll()}

function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        top_button.style.display = "block";
    }
    else {
        top_button.style.display = "none";
    }


    if ((document.documentElement.scrollTop > document.documentElement.clientHeight && document.documentElement.scrollTop < document.documentElement.clientHeight*2) || (document.body.scrollTop > document.body.clientHeight && document.body.scrollTop < document.body.clientHeight*2)) {
        link1.style.backgroundColor = accent_color;
        link1.style.color = "white";
        link2.style.backgroundColor = "";
        link2.style.color = "black";
        link3.style.backgroundColor = "";
        link3.style.color = "black";
    }
    else if ((document.documentElement.scrollTop > document.documentElement.clientHeight *2 && document.documentElement.scrollTop < document.documentElement.clientHeight*3) || (document.body.scrollTop > document.body.clientHeight *2 && document.body.scrollTop < document.body.clientHeight*3)) {
        link1.style.backgroundColor = "";
        link1.style.color = "black";
        link2.style.backgroundColor = accent_color;
        link2.style.color = "white";
        link3.style.backgroundColor = "";
        link3.style.color = "black";
    }
    else if ((document.documentElement.scrollTop > document.documentElement.clientHeight *3 && document.documentElement.scrollTop < document.documentElement.clientHeight*4) || (document.body.scrollTop > document.body.clientHeight *3 && document.body.scrollTop < document.body.clientHeight*4)) {
        link1.style.backgroundColor = "";
        link1.style.color = "black";
        link2.style.backgroundColor = "";
        link2.style.color = "black";
        link3.style.backgroundColor = accent_color;
        link3.style.color = "white";
    }
    else if (document.documentElement.scrollTop < document.documentElement.clientHeight || document.body.scrollTop < document.body.clientHeight) {
        link1.style.backgroundColor = "";
        link1.style.color = "black";
        link2.style.backgroundColor = "";
        link2.style.color = "black";
        link3.style.backgroundColor = "";
        link3.style.color = "black";
    }
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

