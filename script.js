    // Header Scroll Effect
    document.addEventListener("DOMContentLoaded", () => {
        const header = document.querySelector('.header');

        let lastScrollY = 0;
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 50 && currentScrollY > lastScrollY) {
                header.classList.add('header--small');
            } else if (currentScrollY <= 50 || currentScrollY < lastScrollY) {
                header.classList.remove('header--small');
            }

            lastScrollY = currentScrollY;
        });
    });
    // Form Validation
document.getElementById('contactForm').addEventListener('submit', function (event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      event.preventDefault();
    } else {
      alert('Message sent successfully!');
    }
  });document.addEventListener('DOMContentLoaded', () => {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle mobile menu visibility
    mobileNavToggle.addEventListener('click', () => {
        const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
        mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');
    });

    // Close menu when a navigation link is clicked
    navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileNavToggle.setAttribute('aria-expanded', 'false');
        }
    });
});
