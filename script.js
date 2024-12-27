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



  // Form validation script main
  const form = document.getElementById('subscriptionForm');
  const nameInput = document.getElementById('namesubs');
  const emailInput = document.getElementById('emailsubs');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');

  form.addEventListener('submit', function (e) {
      let valid = true;

      // Clear previous error messages
      nameError.textContent = '';
      emailError.textContent = '';

      // Validate name field
      if (nameInput.value.trim() === '') {
          nameError.textContent = '*Name is required';
          valid = false;
      }

      // Validate email field
      if (emailInput.value.trim() === '') {
          emailError.textContent = '*Email is required';
          valid = false;
      } else if (!isValidEmail(emailInput.value.trim())) {
          emailError.textContent = '*Please enter a valid email address';
          valid = false;
      }

      // Prevent form submission if validation fails
      if (!valid) {
          e.preventDefault();
      }
  });

 // Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Form validation script footer
document.addEventListener('DOMContentLoaded', () => {
    const formFooter = document.getElementById('subscriptionForm-footer');
    const nameInputFooter = document.getElementById('namesubs-footer');
    const emailInputFooter = document.getElementById('emailsubs-footer');
    const nameErrorFooter = document.getElementById('nameError-footer');
    const emailErrorFooter = document.getElementById('emailError-footer');

    formFooter.addEventListener('submit', function (e) {
        let valid = true;

        // Clear previous error messages
        nameErrorFooter.textContent = '';
        emailErrorFooter.textContent = '';

        // Validate name field
        if (nameInputFooter.value.trim() === '') {
            nameErrorFooter.textContent = '*Name is required';
            valid = false;
        }

        // Validate email field
        if (emailInputFooter.value.trim() === '') {
            emailErrorFooter.textContent = '*Email is required';
            valid = false;
        } else if (!isValidEmail(emailInputFooter.value.trim())) {
            emailErrorFooter.innerHTML = '*Please enter a valid<br> email address';
            valid = false;
        }

        // Prevent form submission if validation fails
        if (!valid) {
            e.preventDefault();
        }
    });
});

