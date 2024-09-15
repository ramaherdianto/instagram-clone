const menuToggle = document.querySelector('.menu');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('mobile');
});
