document.querySelector('.signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const email = document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;

    // Handle signup with Firebase
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log("User created:", user.uid);
            // Redirect user to a profile page or update UI accordingly
            window.location.href = 'profile.html'; // Change this to your profile page or dashboard
        })
        .catch((error) => {
            console.error("Error signing up:", error);
            alert("Error signing up: " + error.message); // Display error message to the user
        });
});
