let slideHome = document.querySelectorAll(".home .box");
let index = 0;

function nextSlider() {
    slideHome[index].classList.remove("active");
    index = (index + 1) % slideHome.length;
    slideHome[index].classList.add("active");
}

function proveSlider() {
    slideHome[index].classList.remove("active");
    index = (index - 1 + slideHome.length) % slideHome.length;
    slideHome[index].classList.add("active");
}

var swiper = new Swiper(".content-serv", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 0,
        },
        768: {
            slidesPerView: 2,
        },
    },
    loop: true,
    grabCursor: true,
});

let navbar = document.querySelector(".navbar");
let btn = document.querySelector("#icone");

btn.onclick = () => {
    btn.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    navbar.classList.remove("active");
}