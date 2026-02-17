// Get burger menu and nav menu elements
const burger = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu when burger is clicked
burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    animateBurger();
});

// Close menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        resetBurger();
    });
});

// Animate burger icon
function animateBurger() {
    const lines = burger.querySelectorAll('div');
    
    if (navMenu.classList.contains('active')) {
        // Rotate burger into X
        lines[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        lines[1].style.opacity = '0';
        lines[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
        // Reset burger
        resetBurger();
    }
}

// Reset burger icon
function resetBurger() {
    const lines = burger.querySelectorAll('div');
    lines[0].style.transform = 'none';
    lines[1].style.opacity = '1';
    lines[2].style.transform = 'none';
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
        navMenu.classList.remove('active');
        resetBurger();
    }
});
