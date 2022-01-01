// Pre-loader function on load
window.onload = () => {
    let loader = document.querySelector(".loader");
    loader.classList.add("disappear");
    loader.classList.remove("animate__infinite");
};

// Sticky Header function on scroll
window.onscroll = () => {
    let header = document.querySelector("header");
    if (window.pageYOffset > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};

// Menu toggle function on responsive tablet/mobile design
const toggle = document.getElementsByClassName("toggle")[0];
const navlinks = document.getElementsByClassName("navlinks")[0];

toggle.addEventListener("click", () => {
    navlinks.classList.toggle("active");
});

// Tabs function for Work experience
// This snippet is for the home page alone therefore it is to be modified to not cause an runtime error on different pages
function _class(name) {
    return document.getElementsByClassName(name);
}
let tabPanes = _class("tab-header")[0].getElementsByTagName("div");
for (let i = 0; i < tabPanes.length; i++) {
    tabPanes[i].addEventListener("click", function () {
        _class("tab-header")[0]
            .getElementsByClassName("active")[0]
            .classList.remove("active");
        tabPanes[i].classList.add("active");
        _class("tab-indicator")[0].style.top = `calc(80px + ${i * 50}px)`;
        _class("tab-content")[0]
            .getElementsByClassName("active")[0]
            .classList.remove("active");
        _class("tab-content")[0]
            .getElementsByTagName("div")
            [i].classList.add("active");
    });
}

// Testimonial switch function
// This snippet is for the home page alone therefore it is to be modified to not cause an runtime error on different pages
const slides = document.querySelector(".slider").children;
const indicatorImages = document.querySelector(".slider-indicator").children;
for (let i = 0; i < indicatorImages.length; i++) {
    indicatorImages[i].addEventListener("click", function () {
        for (let j = 0; j < indicatorImages.length; j++) {
            indicatorImages[j].classList.remove("active");
        }
        this.classList.add("active");
        const id = this.getAttribute("data-id");
        for (let j = 0; j < slides.length; j++) {
            slides[j].classList.remove("active");
        }
        slides[id].classList.add("active");
    });
}
