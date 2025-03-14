// Header Scroll Effect
document.addEventListener("DOMContentLoaded", () => {
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
});

// Mobile Navigation
document.addEventListener('DOMContentLoaded', () => {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle menu
    mobileNavToggle.addEventListener('click', () => {
        const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
        mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');
    });

    // Close menu on click outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !mobileNavToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileNavToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Smooth scroll and close menu
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            if (window.innerWidth < 769) {
                navLinks.classList.remove('active');
                mobileNavToggle.setAttribute('aria-expanded', 'false');
            }
            
            // Smooth scroll behavior
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
});
// Add to script.js
function optimizeMobileInteractions() {
    if (window.innerWidth < 768) {
      document.querySelectorAll('.certificate-card').forEach(card => {
        card.style.touchAction = 'manipulation';
        card.querySelectorAll('a').forEach(link => {
          link.style.touchAction = 'manipulation';
        });
      });
  
      // Add slight delay for hover effects removal
      setTimeout(() => {
        document.querySelectorAll('.certificate-card').forEach(card => {
          card.style.transform = 'none';
          card.style.boxShadow = 'none';
        });
      }, 100);
    }
  }
  
  // Initialize on load and resize
  window.addEventListener('load', optimizeMobileInteractions);
  window.addEventListener('resize', optimizeMobileInteractions);
// Form Validation
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

// Image Lazy Loading
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = [].slice.call(document.querySelectorAll("img[loading='lazy']"));
    
    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });

         
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const certificateCards = document.querySelectorAll('.certificate-card');
    const searchInput = document.getElementById('certificate-search');
  
    // Filter Functionality
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
  
        const filterValue = button.getAttribute('data-filter');
  
        certificateCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          card.style.display = (filterValue === 'all' || cardCategory === filterValue) ? 'block' : 'none';
        });
      });
    });
  
    // Search Functionality
    searchInput.addEventListener('keyup', () => {
      const searchValue = searchInput.value.toLowerCase();
      certificateCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = title.includes(searchValue) ? 'block' : 'none';
      });
    });
  });
   

    container.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
    document.addEventListener('DOMContentLoaded', function () {
      // Project Filter Functionality
      const projectFilterButtons = document.querySelectorAll('#projects .certificate-filters .filter-btn');
      const projectCards = document.querySelectorAll('#projects .certificate-card');
      const projectSearchInput = document.getElementById('project-search');
  
      projectFilterButtons.forEach(button => {
          button.addEventListener('click', () => {
              projectFilterButtons.forEach(btn => btn.classList.remove('active'));
              button.classList.add('active');
  
              const filterValue = button.getAttribute('data-filter');
  
              projectCards.forEach(card => {
                  const cardCategory = card.getAttribute('data-category');
                  card.style.display = (filterValue === 'all' || cardCategory === filterValue) ? 'block' : 'none';
              });
          });
      });
  
      // Project Search Functionality
      projectSearchInput.addEventListener('keyup', () => {
          const searchValue = projectSearchInput.value.toLowerCase();
          projectCards.forEach(card => {
              const title = card.querySelector('h3').textContent.toLowerCase();
              card.style.display = title.includes(searchValue) ? 'block' : 'none';
          });
      });
  });