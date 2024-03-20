// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARy_zYO_egpSNEL3l3j95TRUNJJrLYHAc",
    authDomain: "u-health-28692.firebaseapp.com",
    projectId: "u-health-28692",
    storageBucket: "u-health-28692.appspot.com",
    messagingSenderId: "27499522323",
    appId: "1:27499522323:web:9981981e9cbb5df4b0d2e6",
    measurementId: "G-VL46SYEPC1"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.getAnalytics(app);
const auth = firebase.auth();
const db = firebase.firestore();

// User Authentication Functions
function signUpWithEmailPassword(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("User created:", user.uid);
            // Redirect user to a profile page or update UI accordingly
            // window.location.href = 'profile.html'; // Example redirect
        })
        .catch((error) => {
            console.error("Error signing up:", error);
            alert("Error signing up: " + error.message); // Display error message to the user
        });
}

function signInWithEmailPassword(email, password) {
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("User signed in:", user.uid);
            // Redirect user to their dashboard or update UI accordingly
            // window.location.href = 'dashboard.html'; // Example redirect
        })
        .catch((error) => {
            console.error("Error signing in:", error);
            alert("Error signing in: " + error.message); // Display error message to the user
        });
}

// Firestore Functions for User Profiles
function createUserProfile(userId, userData) {
    db.collection("users").doc(userId).set(userData)
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
}

function getUserProfile(userId) {
    db.collection("users").doc(userId).get()
        .then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                console.log("No such document!");
            }
        })
        .catch((error) => {
            console.error("Error getting document:", error);
        });
}

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

})(jQuery);
