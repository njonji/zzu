import "jquery"
import "popper.js"
import "./main.scss"



const menuIcons = document.querySelectorAll('.menu-icons');
const navbar = document.querySelector('.navbar');

menuIcons.forEach(icon => icon.addEventListener('click', () => {
    navbar.classList.toggle('active');
}))

