// Import necessary Firebase modules and functions
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase-config.js';
import { addUser } from './firebaseService.js';

// Helper function for email validation
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}

// Event listener for the signup form submission
document.querySelector('.signup-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Capture the form inputs
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const userData = {
        firstName: document.querySelector('#first_name').value,
        lastName: document.querySelector('#last_name').value,
        dob: document.querySelector('#dob').value,
        bloodType: document.querySelector('#blood_type').value,
        height: document.querySelector('#height').value,
        weight: document.querySelector('#weight').value,
        medicalHistory: document.querySelector('#medical-history').value,
        medicalAllergies: document.querySelector('#medical_allergies').value,
        foodAllergies: document.querySelector('#food_allergies').value,
        emergencyContact: document.querySelector('#emergency-contact').value
    };

<<<<<<< HEAD
    // Input validation
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    try {
        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save additional user info in Firestore using the service function
        await addUser(user.uid, userData);

        console.log("User profile created!");
        window.location.href = 'login.html'; // Redirect to login page after signup
    } catch (error) {
        console.error("Failed to create user:", error);
        alert("Failed to create user: " + error.message);
    }
=======
    
>>>>>>> 90a77bfde79f3ed26a391af688cb89b6f75ffcee
});
