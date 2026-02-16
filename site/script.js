// Language toggle
const toggle = document.getElementById('langToggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('lang-en');
});

// Scroll fade-in animations
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.1 }
);

sections.forEach((section) => observer.observe(section));
