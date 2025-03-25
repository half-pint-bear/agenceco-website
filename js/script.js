const burgerMenu = document.getElementById("burger-menu");
const navMenu = document.querySelector("nav");

burgerMenu.addEventListener('click', () => {
    navMenu.style.display === "none" ? navMenu.style.display = "block" : navMenu.style.display = "none";
})