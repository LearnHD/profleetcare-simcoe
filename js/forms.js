// Form handling with EmailJS
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    emailjs.init("8ufVL98VSoK59ohNH");

    // Handle all forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', async function(event) {
            event.preventDefault();
            
            // Show loading state
            const submitButton = form.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            try {
                // Send email using EmailJS
                await emailjs.send(
                    'service_pqtkbxy',
                    'template_j9qrkxd',
                    {
                        from_name: `${data.firstName} ${data.lastName}`,
                        reply_to: data.email,
                        phone: data.phone || 'Not provided',
                        company: data.company || 'Not provided',
                        subject: data.subject || form.id,
                        message: data.message,
                        to_name: 'Pro Fleet Care Simcoe County'
                    }
                );

                // Show success message
                alert('Thank you for your message! We will contact you soon.');
                form.reset();

            } catch (error) {
                console.error('Form submission error:', error);
                alert('There was an error sending your message. Please try again or contact us directly.');
            } finally {
                // Reset button state
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            }
        });
    });
}); 