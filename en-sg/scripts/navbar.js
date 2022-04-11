window.onscroll = function() {
    navbarScrollFunction()
};

function navbarScrollFunction() {
    if (document.body.scrollTop > 36 || document.documentElement.scrollTop > 36) {
        document.getElementById("logo").style.width = "50px";
        document.getElementById("logo").style.height = "50px";
        document.getElementById("logo-text").style.marginRight = "20px";
        document.getElementById("logo-text").style.fontSize = "16px";
    } else {
        document.getElementById("logo").style.width = "65px";
        document.getElementById("logo").style.height = "65px";
        document.getElementById("logo-text").style.marginRight = "0";
        document.getElementById("logo-text").style.fontSize = "20px";
    }
}