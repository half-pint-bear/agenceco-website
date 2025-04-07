//Switch from navbar to burger menu according to device width
const burgerMenu = document.getElementById("burger-menu");
const navMenu = document.querySelector("nav");

burgerMenu.addEventListener('click', () => {
    navMenu.style.display === "none" ? navMenu.style.display = "block" : navMenu.style.display = "none";
})


/*================
Caroussel code
================*/
let slideIndex = 1;

/*Init*/
showSlides(slideIndex);

/*
Get next or previous slide on chevron click 
*/
function changeSlide(n) {
    showSlides(slideIndex += n);
}

/*
Select slide on click
*/
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