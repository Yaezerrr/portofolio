// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll function
    function smoothScroll(target) {
        const section = document.querySelector(target);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Toggle sections for Education, Experience, Skills, and Presentations
    const toggleLinks = document.querySelectorAll('.toggle-section');
    toggleLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor click behavior
            const targetId = link.getAttribute('href'); // Get the target section ID
            const targetSection = document.querySelector(targetId);

            // Toggle the visibility of the target section
            if (targetSection) {
                targetSection.classList.toggle('hidden'); // Toggle visibility
                smoothScroll(targetId); // Smooth scroll to the section
            }
        });
    });

    // Services navigation click event
    document.querySelectorAll('.services-nav ul li a').forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor click behavior

            // Hide all service details
            document.querySelectorAll('.services-detail').forEach(detail => {
                detail.classList.add('hidden'); // Hide all
                detail.classList.remove('visible'); // Ensure visible class is removed
            });

            // Show the corresponding service detail
            const serviceId = this.getAttribute('href'); // Get ID from href (like #estate)
            const targetService = document.querySelector(serviceId);
            if (targetService) {
                targetService.classList.remove('hidden'); // Show the target
                targetService.classList.add('visible'); // Ensure it's marked as visible
                smoothScroll(serviceId); // Smooth scroll to the section
            }
        });
    });
});
