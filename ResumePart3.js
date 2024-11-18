// Animate header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header h1');
    header.style.transform = `translateY(${window.scrollY * 0.5}px)`;
});

// Interactivity for social links
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.opacity = 0.7;
    });
    link.addEventListener('mouseout', () => {
        link.style.opacity = 1;
    });
});
