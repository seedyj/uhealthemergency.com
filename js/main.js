<<<<<<< HEAD
// Firebase configuration and initialization
const firebaseConfig = {
    // ... your Firebase config object properties ...
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


=======
>>>>>>> 90a77bfde79f3ed26a391af688cb89b6f75ffcee
// Below are the UI-related scripts for your website
(function ($) {
    "use strict";

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    // Date and time picker
    $('.date').datetimepicker({ format: 'L' });
    $('.time').datetimepicker({ format: 'LT' });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });



    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true, smartSpeed: 1000, items: 1, dots: true, loop: true,
    });

    // Basic validation for the signup form
    $(document).ready(function() {
        document.querySelector(".signup-form").addEventListener("submit", function(e) {
<<<<<<< HEAD
            let password = document.getElementById("password").value;
            let agree = document.getElementById("agree").checked;
=======
            var password = document.getElementById("password").value;
            var agree = document.getElementById("agree").checked;
>>>>>>> 90a77bfde79f3ed26a391af688cb89b6f75ffcee
            // Example validation: ensure password length and consent checkbox
            if(password.length < 8 || !agree) {
                e.preventDefault(); // Prevent form submission
                alert("Please ensure all fields are filled out correctly.");
            }
            // Add more validations as needed
        });
    });

})(jQuery);
