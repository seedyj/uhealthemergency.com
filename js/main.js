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

    // Price carousel
    $(".price-carousel").owlCarousel({
        autoplay: true, smartSpeed: 1000, margin: 45, dots: false, loop: true, nav: true,
        navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
        responsive: { 0: { items:1 }, 992: { items:2 }, 1200: { items:3 } }
    });

    // Team carousel and related carousel
    $(".team-carousel, .related-carousel").owlCarousel({
        autoplay: true, smartSpeed: 1000, margin: 45, dots: false, loop: true, nav: true,
        navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
        responsive: { 0: { items:1 }, 992: { items:2 } }
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true, smartSpeed: 1000, items: 1, dots: true, loop: true,
    });

    // Basic validation for the signup form
    $(document).ready(function() {
        document.querySelector(".signup-form").addEventListener("submit", function(e) {
            var password = document.getElementById("password").value;
            var agree = document.getElementById("agree").checked;
            // Example validation: ensure password length and consent checkbox
            if(password.length < 8 || !agree) {
                e.preventDefault(); // Prevent form submission
                alert("Please ensure all fields are filled out correctly.");
            }
            // Add more validations as needed
        });
    });

})(jQuery);
