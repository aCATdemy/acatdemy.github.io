const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    body.classList.add("disabledScroll");
}
closeBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    body.classList.remove("disabledScroll");
}

window.onscroll = ()=>{
    this.scrollY > 315 ? navbar.classList.add("hide") : navbar.classList.remove("hide");
}