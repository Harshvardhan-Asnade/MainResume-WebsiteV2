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
  