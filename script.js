// script.js

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const menu = document.getElementById('menu');

    // Function to open the menu
    const openMenu = () => {
        menu.classList.remove('hidden');
        menu.classList.add('active');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    };

    // Function to close the menu
    const closeMenu = () => {
        menu.classList.remove('active');
        menu.classList.add('hidden');
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    };

    // Event listener for menu icon click
    menuIcon.addEventListener('click', openMenu);

    // Event listener for close icon click
    closeIcon.addEventListener('click', closeMenu);

    // Optional: Close the menu when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !menuIcon.contains(event.target) && !closeIcon.contains(event.target)) {
            if (menu.classList.contains('active')) {
                closeMenu();
            }
        }
    });
});
