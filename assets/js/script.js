var windowWidth = window.innerWidth;
var windowWidth2 = 2 * windowWidth;

var horLength = document.querySelector(".element-wrapper").scrollWidth;

var distFromTop = document.querySelector(".horizontal-section").offsetTop;

var scrollDistance = distFromTop + horLength - windowWidth;

var hl1 = document.querySelector(".line-one");
var hl2 = document.querySelector(".line-two");
var hl3 = document.querySelector(".line-three");


document.querySelector(".horizontal-section").style.height = horLength + "px";


window.onscroll = function() {
    var scrollTop = window.pageYOffset;

    if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
        document.querySelector(".element-wrapper").style.transform = "translateX(-" + (scrollTop - distFromTop) + "px)";
    }
    if (scrollTop <= windowWidth) {
        hl1.classList.add('active');
        hl2.classList.remove('active');
        hl3.classList.remove('active');
    } else if (scrollTop >= windowWidth && scrollTop <= windowWidth2) {
        hl1.classList.remove('active');
        hl2.classList.add('active');
        hl3.classList.remove('active');
    } else {
        hl1.classList.remove('active');
        hl2.classList.remove('active');
        hl3.classList.add('active');
    }

}

hl1.addEventListener("click", function() {
    hl1.classList.add('active');
    hl2.classList.remove('active');
    hl3.classList.remove('active');
});
hl2.addEventListener("click", function() {
    hl1.classList.remove('active');
    hl2.classList.add('active');
    hl3.classList.remove('active');
});
hl3.addEventListener("click", function() {
    hl1.classList.remove('active');
    hl2.classList.remove('active');
    hl3.classList.add('active');
});

var menuText = document.querySelector('.menu-text');
var navBar = document.querySelector('.navbar');
var navMenu = document.querySelector('.nav-menu');
var hrSection = document.querySelector('.horizontal-section');

function openMenu() {
    menuText.classList.toggle('active');
    navBar.classList.toggle('active');
    navMenu.classList.toggle('active');
    hrSection.classList.toggle('active');
}
// window.addEventListener("scroll",function(){
//   var header = document.querySelector('header');
//   header.classList.toggle("disable", window.scrollY > scrollHeader);
// })

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