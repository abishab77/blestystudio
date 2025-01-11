

// window.addEventListener("resize", () => {
//     location.reload();
//   });

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const menu = document.getElementById('menu');
    let isBelowThreshold = window.innerWidth <= 768;

    // Function to open the menu
    const openMenu = () => {
        menu.classList.add('active');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    // Function to close the menu
    const closeMenu = () => {
        menu.classList.remove('active');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    // Function to enable menu functionality below 768px
    const enableMenuListeners = () => {
        menuIcon.addEventListener('click', openMenu);
        closeIcon.addEventListener('click', closeMenu);

        // Close the menu when clicking outside of it
        document.addEventListener('click', closeOnOutsideClick);

        // Close the menu when a menu link is clicked
        const menuLinks = document.querySelectorAll('#menu a');
        menuLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    };

    // Function to disable menu functionality
    const disableMenuListeners = () => {
        menuIcon.removeEventListener('click', openMenu);
        closeIcon.removeEventListener('click', closeMenu);
        document.removeEventListener('click', closeOnOutsideClick);

        // Remove event listeners from menu links
        const menuLinks = document.querySelectorAll('#menu a');
        menuLinks.forEach(link => {
            link.removeEventListener('click', closeMenu);
        });

        // Ensure menu is reset
        closeMenu();
    };

    // Function to handle clicking outside of the menu
    const closeOnOutsideClick = (event) => {
        if (
            !menu.contains(event.target) &&
            !menuIcon.contains(event.target) &&
            !closeIcon.contains(event.target) &&
            menu.classList.contains('active')
        ) {
            closeMenu();
        }
    };

    // Function to toggle menu functionality based on screen width
    const handleResize = () => {
        const isNowBelowThreshold = window.innerWidth <= 769;

        // Only toggle listeners if there's a change in the state
        if (isNowBelowThreshold !== isBelowThreshold) {
            if (isNowBelowThreshold) {
                enableMenuListeners();
            } else {
                disableMenuListeners();
            }
            isBelowThreshold = isNowBelowThreshold;
        }
    };

    // Initialize functionality based on initial screen size
    if (isBelowThreshold) {
        enableMenuListeners();
    }

    // Add resize event listener to dynamically toggle functionality
    window.addEventListener('resize', handleResize);
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

  //showcase home
//   $('.center').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 3,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 3
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });

//showcase in home slider
$('.center-slick').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    draggable: true,
    infinite: true,
    autoplay: true,          // Enable autoplay
    autoplaySpeed: 3000, 
    responsive: [
      {
        // Below 1024px
        breakpoint: 1024,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3
        }
      },
      {
        // Below 768px
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px', // Adjust padding if needed
          slidesToShow: 1
        }
      },
      {
        // Below 768px
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px', // Adjust padding if needed
          slidesToShow: 1
        }
      },
    ]
  });
  $('.center-slick').on('afterChange', function (event, slick, currentSlide) {
    $('.center-slick .slick-slide').css('opacity', '0.5'); // Set low opacity for all slides
    $('.center-slick .slick-center').css('opacity', '1');  // Set high opacity for the center slide
  });

  $('.center-slick').on('click', '.slick-slide', function () {
    const index = $(this).data('slick-index'); // Get the index of the clicked slide
    $('.center-slick').slick('slickGoTo', index); // Navigate to the clicked slide
  });

  

//gallery glightbox
const lightbox = GLightbox({
    openEffect: 'zoom',   // Options: 'zoom', 'fade', 'none'
    closeEffect: 'fade',  // Options: 'zoom', 'fade', 'none'
    slideEffect: 'slide', // Options: 'slide', 'fade', 'none'
    zoomable: true,       // Enable zoom on images
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

// audio
function pauseOtherAudio(currentAudioId) {
    // Get all audio elements
    const audios = document.querySelectorAll('audio');
    
    // Pause any audio that is not the current one
    audios.forEach(audio => {
        if (audio.id !== currentAudioId && !audio.paused) {
            audio.pause();
        }
    });
}


        
  
