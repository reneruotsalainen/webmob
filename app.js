const navBar = document.querySelector("header");
const top_button = document.getElementById("b2t");

// navibar links
const link0 = document.getElementById("intro-link");
const link1 = document.getElementById("history-link");
const link2 = document.getElementById("distros-link");

//hamburger menu
const hamburger = document.querySelector('.hamburger');
const hamburgerLinks = document.querySelector('.hamburger-links');

const hamburgerLinkList = document.querySelectorAll('.hamburger-links a');

// distroLogos
const distroLogos = document.querySelectorAll('.distro-logo');

// colors
const color = "#cdcdcd"
 
// a little pixel buffer for link highlight
const buffer = 10

const mainContent = document.querySelector(".main-content");

// close hamburber menu when clicking main content
mainContent.addEventListener('click', () => {
    hamburgerLinks.classList.remove("open");
})

hamburgerLinkList.forEach(link => {
    link.addEventListener('click', () => {
        hamburgerLinks.classList.remove("open");
    })
});

distroLogos.forEach(logo => {
    logo.addEventListener('mouseover', () => {
        logo.classList.add('logohover');
    })
})

distroLogos.forEach(logo => {
    logo.addEventListener('mouseout', () => {
        logo.classList.remove('logohover');
    })
})

document.onscroll = function() {scroll()}

hamburger.addEventListener('click', () => {
    hamburgerLinks.classList.toggle("open");
})

function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        top_button.style.display = "block";
    }
    else {
        top_button.style.display = "none";
    }


    if ((document.documentElement.scrollTop >= document.documentElement.clientHeight - buffer && document.documentElement.scrollTop < document.documentElement.clientHeight*2 - buffer) || (document.body.scrollTop > document.body.clientHeight - buffer && document.body.scrollTop < document.body.clientHeight*2 - buffer)) {
        setLinkColors(0);
    }
    else if ((document.documentElement.scrollTop >= document.documentElement.clientHeight *2 - buffer && document.documentElement.scrollTop < document.documentElement.clientHeight*3 - buffer) || (document.body.scrollTop > document.body.clientHeight *2 - buffer && document.body.scrollTop < document.body.clientHeight*3 - buffer)) {
        setLinkColors(1);
    }
    else if ((document.documentElement.scrollTop >= document.documentElement.clientHeight *3 - buffer && document.documentElement.scrollTop < document.documentElement.clientHeight*4 - buffer) || (document.body.scrollTop > document.body.clientHeight *3 - buffer && document.body.scrollTop < document.body.clientHeight*4 - buffer)) {
        setLinkColors(2);
    }
    else if (document.documentElement.scrollTop < document.documentElement.clientHeight || document.body.scrollTop < document.body.clientHeight) {
        setLinkColors(-1);
    }
}

function setLinkColors(link_no) {
    switch (link_no) {
        default:
            link0.style.backgroundColor = "";
            link0.style.color = "black";
            link1.style.backgroundColor = "";
            link1.style.color = "black";
            link2.style.backgroundColor = "";
            link2.style.color = "black";
            break;
        case 0:
            link0.style.backgroundColor = color;
            link0.style.color = "white";
            link1.style.backgroundColor = "";
            link1.style.color = "black";
            link2.style.backgroundColor = "";
            link2.style.color = "black";
            break;
        case 1:
            link0.style.backgroundColor = "";
            link0.style.color = "black";
            link1.style.backgroundColor = color;
            link1.style.color = "white";
            link2.style.backgroundColor = "";
            link2.style.color = "black";
            break;
        case 2:
            link0.style.backgroundColor = "";
            link0.style.color = "black";
            link1.style.backgroundColor = "";
            link1.style.color = "black";
            link2.style.backgroundColor = color;
            link2.style.color = "white";
            break;

    }

}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

