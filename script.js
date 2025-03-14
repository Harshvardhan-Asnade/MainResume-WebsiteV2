document.addEventListener('DOMContentLoaded', function () {
    // **Header Scroll Effect**
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 50 && currentScrollY > lastScrollY) {
            header.classList.add('header--small');
        } else if (currentScrollY <= 50 || currentScrollY < lastScrollY) {
            header.classList.remove('header--small');
        }
        lastScrollY = currentScrollY;
    });

    // **Mobile Navigation**
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileNavToggle.addEventListener('click', () => {
        const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
        mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileNavToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileNavToggle.setAttribute('aria-expanded', 'false');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth < 769) {
                navLinks.classList.remove('active');
                mobileNavToggle.setAttribute('aria-expanded', 'false');
            }
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // **Form Validation**
    document.getElementById('contactForm')?.addEventListener('submit', function(e) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            e.preventDefault();
            alert('Please fill out all fields.');
        } else {
            alert('Message sent successfully!');
        }
    });

    // **Image Lazy Loading**
    const lazyImages = document.querySelectorAll("img[loading='lazy']");
    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    if (lazyImage.dataset.src) {
                        lazyImage.src = lazyImage.dataset.src;
                    }
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }

    // **Certificates Filtering and Search**
    const certificateFilterButtons = document.querySelectorAll('#certificates .filter-btn');
    const certificateCards = document.querySelectorAll('#certificates .certificate-card');
    const certificateSearchInput = document.getElementById('certificate-search');

    certificateFilterButtons.forEach(button => {
        button.addEventListener('click', () => {
            certificateFilterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filterValue = button.getAttribute('data-filter');

            certificateCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                card.style.display = (filterValue === 'all' || cardCategory === filterValue) ? 'block' : 'none';
            });
        });
    });

    certificateSearchInput.addEventListener('keyup', () => {
        const searchValue = certificateSearchInput.value.toLowerCase();
        certificateCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            card.style.display = title.includes(searchValue) ? 'block' : 'none';
        });
    });

    // **Projects Filtering and Search**
    const projectFilterButtons = document.querySelectorAll('#projects .projects-filter-btn');
    const projectCards = document.querySelectorAll('#projects .project-card');
    const projectSearchInput = document.getElementById('project-search');

    projectFilterButtons.forEach(button => {
        button.addEventListener('click', () => {
            projectFilterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                const cardCategories = card.getAttribute('data-category').split(',').map(cat => cat.trim());
                card.style.display = (filterValue === 'all' || cardCategories.includes(filterValue)) ? 'block' : 'none';
            });
        });
    });

    projectSearchInput.addEventListener('keyup', () => {
        const searchValue = projectSearchInput.value.toLowerCase();
        projectCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            card.style.display = title.includes(searchValue) ? 'block' : 'none';
        });
    });
});