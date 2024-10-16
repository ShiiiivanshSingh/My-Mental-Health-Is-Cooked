// JavaScript for slide-in animation
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.slide-in');
    sections.forEach(section => {
        section.classList.add('visible');
    });
});
