window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var navbarcolour = document.getElementById("navbarcol");

var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        navbarcolour.classList.remove("bg-light");
        navbarcolour.classList.add("bg-warning");
    } else {
        navbar.classList.remove("sticky");
        navbarcolour.classList.remove("bg-warning");
        navbarcolour.classList.add("bg-light");
    }
}