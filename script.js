// script.js

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const menu = document.getElementById('menu');

    // Function to open the menu
    const openMenu = () => {
        menu.classList.add('active');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        // Prevent scrolling when menu is open
        document.body.style.overflow = 'hidden';
    };

    // Function to close the menu
    const closeMenu = () => {
        menu.classList.remove('active');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        // Restore scrolling
        document.body.style.overflow = 'auto';
    };

    // Event listener for menu icon click
    menuIcon.addEventListener('click', openMenu);

    // Event listener for close icon click
    closeIcon.addEventListener('click', closeMenu);

    // Close the menu when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !menuIcon.contains(event.target) && !closeIcon.contains(event.target)) {
            if (menu.classList.contains('active')) {
                closeMenu();
            }
        }
    });

    // Optional: Close the menu when a menu link is clicked (useful for single-page applications)
    const menuLinks = document.querySelectorAll('#menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});
