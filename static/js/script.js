// Toggle Hamburger Menu for Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Tutup menu mobile saat link diklik
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Efek Navbar saat di-scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 15px rgba(0,0,0,0.5)';
        navbar.style.padding = '10px 50px';
    } else {
        navbar.style.boxShadow = 'none';
        navbar.style.padding = '15px 50px';
    }
});