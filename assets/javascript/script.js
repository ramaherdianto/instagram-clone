const menuMobile = document.querySelector('.menu');
const nav = document.querySelector('nav ul');
const header = document.querySelector('.navbar-container');
const username = document.querySelector('#user-username');

const userInput = prompt('Masukkan nama panggilanmu !');
if (userInput) {
    username.textContent = userInput;
} else {
    username.textContent = 'Your Profile';
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('shadow');
    } else {
        header.classList.remove('shadow');
    }
});

menuMobile.addEventListener('click', function () {
    nav.classList.toggle('mobile');
});
