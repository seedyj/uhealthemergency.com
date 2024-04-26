// Import only what is necessary
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase-config.js';  // Assuming firebase-config.js initializes Firebase and exports 'auth'

document.querySelector('.login-form').addEventListener('submit', async function(event) {
    event.preventDefault();  // Prevent the form from submitting normally

    // Capture user inputs
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

<<<<<<< HEAD
    try {
        // Use Firebase Authentication to sign in
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // Signed in successfully

        // Optionally, redirect to the user's dashboard or home page after login
        console.log("Logged in successfully, User ID:", userCredential.user.uid);  // Using the user ID for logging
        window.location.href = 'dashboard.html';  // Adjust this URL as needed
    } catch (error) {
        const errorMessage = error.message;
        console.error("Error signing in:", errorMessage);
        alert("Error: " + errorMessage);  // Display error message to the user
    }
=======

>>>>>>> 90a77bfde79f3ed26a391af688cb89b6f75ffcee
});
