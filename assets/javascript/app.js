const menuToggle = document.querySelector('.menu');
const nav = document.querySelector('nav ul');
const header = document.querySelector('.navbar-container');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 50);
});

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('mobile');
});
