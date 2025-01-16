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
  });
  document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-link');

    // Toggle navigation menu
    navToggle.addEventListener('click', function () {
        const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navItems.forEach(link => {
        link.addEventListener('click', function () {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
});
<script>
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');

  mobileNavToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
</script>
