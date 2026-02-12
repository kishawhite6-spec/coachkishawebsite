// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Hero CTA Button interaction
const ctaButton = document.getElementById('cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function(e) {
        // Smooth scroll is already handled above
        // You can add analytics tracking here if needed
        console.log('CTA clicked: Let\'s Talk About Your Next Move');
    });
}

// Book Call Button interaction
const bookCallButton = document.getElementById('book-call-button');
if (bookCallButton) {
    bookCallButton.addEventListener('click', function(e) {
        e.preventDefault();
        // Opens your scheduling link in a new tab
        window.open('https://meetings-na2.hubspot.com/kisha-white', '_blank');
    });
}

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#0f0f1e';
        navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
    } else {
        navbar.style.backgroundColor = '#1a1a2e';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Animate cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Observe why cards
document.querySelectorAll('.why-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Observe testimonial cards
document.querySelectorAll('.testimonial-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Add smooth reveal to about section
const aboutSection = document.querySelector('.about-text');
if (aboutSection) {
    aboutSection.style.opacity = '0';
    aboutSection.style.transform = 'translateY(30px)';
    aboutSection.style.transition = 'all 0.8s ease';
    observer.observe(aboutSection);
}

// Log page load for analytics (optional)
console.log('Coach Kisha White website loaded successfully');