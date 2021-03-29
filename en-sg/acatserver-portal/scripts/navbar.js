window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var navbarcol = document.getElementById("navbarcol");

var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        navbarcol.classList.remove("bg-light");
        navbarcol.classList.add("bg-warning");
    } else {
        navbar.classList.remove("sticky");
        navbarcol.classList.remove("bg-warning");
        navbarcol.classList.add("bg-light");
    }
}