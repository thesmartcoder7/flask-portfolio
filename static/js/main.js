let loader = document.querySelector(".loader");
if (loader != null && typeof loader != undefined) {
    // Pre-loader function on load
    window.onload = () => {
        loader.classList.add("disappear");
        loader.classList.remove("animate__infinite");
    };
}

let header = document.querySelector("header");
if (header != null && typeof header != undefined) {
    // Sticky Header function on scroll
    window.onscroll = () => {
        if (window.pageYOffset > 0) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    };
}

// Menu toggle function on responsive tablet/mobile design
const toggle_ = document.querySelector(".toggle");
const navlinks_ = document.querySelector(".navlinks");

if (
    toggle_ != null &&
    navlinks_ != null &&
    typeof toggle_ != undefined &&
    typeof navlinks_ != undefined
) {
    const toggle = document.getElementsByClassName("toggle")[0];
    const navlinks = document.getElementsByClassName("navlinks")[0];
    toggle.addEventListener("click", () => {
        navlinks.classList.toggle("active");
    });
}

// social media toggle function on responsive tablet/mobile design
const share_ = document.querySelector(".fa-share-square");
const socialShare_ = document.querySelector(".social-share");

if (
    share_ != null &&
    socialShare_ != null &&
    typeof share_ != undefined &&
    typeof socialShare_ != undefined
) {
    const share = document.getElementsByClassName("fa-share-square")[0];
    const socialShare = document.getElementsByClassName("social-share")[0];
    share.addEventListener("click", () => {
        socialShare.classList.toggle("social-share-on");
    });
}

// Tabs function for Work experience
// This snippet is for the home page alone therefore it is to be modified to not cause an runtime error on different pages
function _class(name) {
    return document.getElementsByClassName(name);
}
const tabheader = document.querySelector(".tab-header");

if (tabheader != null && tabheader != undefined) {
    // let tabPanes = _class("tab-header")[0].getElementsByTagName("div");
    let tabPanes = tabheader.getElementsByTagName("div");
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
}

// Testimonial switch function
// This snippet is for the home page alone therefore it is to be modified to not cause an runtime error on different pages
const slides_ = document.querySelector(".slider");
const indicatorImages_ = document.querySelector(".slider-indicator");
if (
    slides_ != null &&
    indicatorImages_ != null &&
    typeof slides_ != undefined &&
    typeof indicatorImages_ != undefined
) {
    const slides = document.querySelector(".slider").children;
    const indicatorImages =
        document.querySelector(".slider-indicator").children;
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
}

// blog post sharing function
/* 
########################################################################

Social Share Links:
WhatsApp:
https://wa.me/?text=[post-title] [post-url]
Facebook:
https://www.facebook.com/sharer.php?u=[post-url]
Twitter:
https://twitter.com/share?url=[post-url]&text=[post-title]
LinkedIn:
https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]

##########################################################################
*/

//please find the telegram link . . .

const facebook = document.querySelector(".facebook");
const twitter = document.querySelector(".twitter");
const linkedin = document.querySelector(".linkedin");
const whatsapp = document.querySelector(".whatsapp");
const telegram = document.querySelector(".telegram");

if (
    facebook != null &&
    twitter != null &&
    linkedin != null &&
    whatsapp != null &&
    telegram != null &&
    typeof facebook != undefined &&
    typeof twitter != undefined &&
    typeof linkedin != undefined &&
    typeof whatsapp != undefined &&
    typeof telegram != undefined
) {
    function share() {
        /*
          Ithink this is on your end, Dom. I am not sure if we actually
          the post image in this section but I just included it incase one of
          the links will require it. 
        */
        const image = document.querySelector(".postImage");
        const title = document.querySelector(".post-title").textContent;

        let postUrl = encodeURI(document.location.href);
        let postTitle = encodeURI(title);
        let postImg = encodeURI(image.src);

        facebook.setAttribute(
            "href",
            `https://www.facebook.com/sharer.php?u=${postUrl}`
        );

        twitter.setAttribute(
            "href",
            `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
        );

        linkedin.setAttribute(
            "href",
            `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
        );

        whatsapp.setAttribute(
            "href",
            `https://wa.me/?text=${postTitle} ${postUrl}`
        );
        telegram.setAttribute(
            "href",
            `https://telegram.me/share/url?url=${postUrl} &text=${postTitle}`
        );
    }

    share();
}

let span = document.querySelector(".slide-toggle");
let project_slide = document.querySelector(".project-slide");
let product_page = Math.ceil(project_slide.length / 4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;

// mobile_view
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches) {
    movePer = 50.36;
    maxMove = 504;
}

let right_mover = () => {
    l = l + movePer;
    if (project_slide == 1) {
        l = 0;
    }
    for (const i of project_slide) {
        if (l > maxMove) {
            l = l - movePer;
        }
        i.style.left = "-" + l + "%";
    }
};
let left_mover = () => {
    l = l - movePer;
    if (l <= 0) {
        l = 0;
    }
    for (const i of project_slide) {
        if (product_page > 1) {
            i.style.left = "-" + l + "%";
        }
    }
};

span[1].onclick = () => {
    right_mover();
};
span[0].onclick = () => {
    left_mover();
};
