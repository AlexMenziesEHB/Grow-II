window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("header").style.fontSize = "40px";
        document.getElementById("header").style.padding = "70px 10px 0px";
        document.getElementById("header").style.background = "#F44336 url(.) fixed top";
    } else {
        document.getElementById("header").style.fontSize = "90px";
        document.getElementById("header").style.padding = "230px 10px";
        document.getElementById("header").style.background = "#F44336 url(../Sources/Pictures/abs3.jpg) fixed top";
        document.getElementById("header").style.backgroundSize = "cover";
    }
}