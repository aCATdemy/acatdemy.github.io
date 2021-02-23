const navbar = document.querySelector(".navbar");

window.onscroll = ()=>{
    this.scrollY > 315 ? navbar.classList.add("hide") : navbar.classList.remove("hide");
}