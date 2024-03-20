document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Capture user inputs
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    // Handle login with Firebase
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("User signed in:", user.uid);
            // Redirect user to their dashboard or update UI accordingly
            window.location.href = 'dashboard.html'; // Change 'dashboard.html' to your dashboard page
        })
        .catch((error) => {
            console.error("Error signing in:", error);
            alert("Error signing in: " + error.message); // Display error message to the user
        });
});
