var menuText = document.querySelector('.menu-text');
var navBar = document.querySelector('.navbar');
var navMenu = document.querySelector('.nav-menu');
var mainSection = document.querySelector('.main-page');

function openMenu() {
    menuText.classList.toggle('active');
    navBar.classList.toggle('active');
    navMenu.classList.toggle('active');
    mainSection.classList.toggle('active');
}
window.addEventListener("scroll", function() {
    var header = document.querySelector('header');
    header.classList.toggle("disable", window.scrollY > 500);
})

$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        dots: false,
        autoplay: false,
        navText: ["", "🠒"],
        autoplayTimeout: 7000,

    })
});