import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase-config.js';  // Ensure these are the initialized instances

// Monitor authentication state changes
onAuthStateChanged(auth, user => {
    if (user) {
        // User is signed in, proceed to fetch and display user data
        const docRef = doc(db, "users", user.uid);
        getDoc(docRef).then(docSnap => {
            if (docSnap.exists()) {
                const userData = docSnap.data();
                // Populate the dashboard with user information
                document.getElementById('user-email').textContent = user.email; // Email directly from auth
                document.getElementById('first-name-display').textContent = userData.firstName;
                document.getElementById('last-name-display').textContent = userData.lastName;
                document.getElementById('dob-display').textContent = userData.dob;
                document.getElementById('blood-type-display').textContent = userData.bloodType;
                document.getElementById('height-display').textContent = `${userData.height} cm`;
                document.getElementById('weight-display').textContent = `${userData.weight} kg`;
                document.getElementById('medical-history-display').textContent = userData.medicalHistory;
                document.getElementById('medical-allergies-display').textContent = userData.medicalAllergies;
                document.getElementById('food-allergies-display').textContent = userData.foodAllergies;
                document.getElementById('emergency-contact-display').textContent = userData.emergencyContact;

                // Update the welcome message to use the user's first name
                document.querySelector('h2.text-center.mb-4').textContent = `Welcome, ${userData.firstName}!`;
            } else {
                console.log("No user data available");
            }
        }).catch(error => {
            console.error("Error fetching user data:", error);
            alert("Failed to load data: " + error.message);
        });
    } else {
        // User is not signed in, redirect to login page
        window.location.href = 'login.html';
    }
});
