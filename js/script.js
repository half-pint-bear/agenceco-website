const burgerMenu = document.getElementById("burger-menu");
const navMenu = document.querySelector("nav");

burgerMenu.addEventListener('click', () => {
    navMenu.style.display === "none" ? navMenu.style.display = "block" : navMenu.style.display = "none";
})


let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if(n > slides.length)
        slideIndex = 1;

    if(n < 1) {
        slideIndex = slides.length;
    }

    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex -1].style.display = "block";
}