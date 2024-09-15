const menuToggle = document.querySelector('.menu');
const nav = document.querySelector('nav ul');
const header = document.querySelector('.navbar-container');
const username = document.querySelector('#user-username');

const userInput = prompt('Masukkan username instagram kamu !');
if (userInput) {
    username.textContent = userInput;
} else {
    username.textContent = 'Your Profile';
}

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 50);
});

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('mobile');
});
