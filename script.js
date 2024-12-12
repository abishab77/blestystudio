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
function closeMenuu()
{
    menu.classList.remove('active');
        
        closeIcon.style.display = 'none';
        // Restore scrolling
        document.body.style.overflow = 'auto';
}
    // Optional: Close the menu when a menu link is clicked (useful for single-page applications)
    const menuLinks = document.querySelectorAll('#menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenuu);
    });
});


//slider
$(document).ready(function () {
    $('.slider-container').slick({
      autoplay: true,
      autoplaySpeed: 3000, // 3 seconds
      dots: true,
      arrows: false, // No navigation arrows
      pauseOnHover: true, // Pause when the user hovers
      infinite: true,
      speed: 500,
      fade: true, // Smooth fading effect
      cssEase: 'linear',
    });
  });



  //basic validation
  function validateForm() {
    // Get form field values
    const name = document.getElementById('name-enquiry').value.trim();
    const subject = document.getElementById('subject-enquiry').value.trim();
    const email = document.getElementById('email-enquiry').value.trim();
    const message = document.getElementById('message-enquiry').value;

    // Validation checks
    if (name === '') {
        document.querySelector('#name-label').innerHTML="Inavlid name";
        alert('Please enter your name.');
        document.querySelector('#label-name').innerHTML="Inavlid name";
        return false;
    }

    if (subject === '') {
        alert('Please enter your subject.');
        return false;
    }

    if (email === '') {
        alert('Please enter your email.');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (message === '') {
        alert('Please enter your message.');
        return false;
    }

    // If all checks pass
    alert('Form is valid! You can now submit it.');
    // Perform further actions (e.g., submitting the form via an API)
    return true;
}

// Email validation function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
