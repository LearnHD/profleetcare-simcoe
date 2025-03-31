// Main JavaScript for Pro Fleet Care Simcoe County Website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');
    
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            // Change icon based on menu state
            const icon = navToggle.querySelector('i');
            if (icon) {
                if (mainNav.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mainNav && mainNav.classList.contains('active') && !mainNav.contains(event.target) && event.target !== navToggle) {
            mainNav.classList.remove('active');
            
            // Reset icon
            const icon = navToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
    
    // Form Submission
    const quoteForm = document.getElementById('quoteForm');
    if (quoteForm) {
        quoteForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            
            // Get form data
            const formData = new FormData(quoteForm);
            const data = Object.fromEntries(formData.entries());
            
            // Basic form validation
            for (const [key, value] of Object.entries(data)) {
                if (!value.trim()) {
                    alert(`Please fill in the ${key.replace(/([A-Z])/g, ' $1').toLowerCase()} field`);
                    return;
                }
            }

            // Here you would typically send the form data to your server
            // For now, we'll just show a success message
            alert('Thank you for your inquiry! We will contact you soon.');
            quoteForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        
        if ((currentPage === '' || currentPage === 'index.html') && (linkPage === 'index.html' || linkPage === '')) {
            link.parentElement.classList.add('active');
        } else if (linkPage === currentPage) {
            link.parentElement.classList.add('active');
        }
    });
    
    // Initialize any sliders or carousels
    // This would be implemented if using a carousel library
    
    // Lazy load images for better performance
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        // This would implement a JavaScript-based lazy loading solution
    }
});
