<?php
// Start session
session_start();

// Check if the user is logged in, otherwise redirect to login page
if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("location: login.html");
    exit;
}

// Include config file here (which connects to your database)
require_once "config.php";

// Define variables and initialize with empty values
$username = $fullName = $email = "";

// Assuming you have a variable $_SESSION['id'] to identify the logged-in user
$userId = $_SESSION['id'];

// Prepare a select statement to retrieve user information
$sql = "SELECT username, fullName, email FROM users WHERE id = ?";

if ($stmt = mysqli_prepare($link, $sql)) {
    // Bind variables to the prepared statement as parameters
    mysqli_stmt_bind_param($stmt, "i", $param_id);

    // Set parameters
    $param_id = $userId;

    // Attempt to execute the prepared statement
    if (mysqli_stmt_execute($stmt)) {
        // Store result
        mysqli_stmt_store_result($stmt);

        // Check if username exists, if yes then verify password
        if (mysqli_stmt_num_rows($stmt) == 1) {
            // Bind result variables
            mysqli_stmt_bind_result($stmt, $username, $fullName, $email);

            if (mysqli_stmt_fetch($stmt)) {
                // User's data is now in $username, $fullName, $email
            }
        }
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }

    // Close statement
    mysqli_stmt_close($stmt);
}

// Close connection
mysqli_close($link);
?>
<?php include "session.php"; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Welcome</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <script src="js/bootstrap.bundle.min.js"></script>
    <!-- Ensure you have these Bootstrap files hosted or linked to CDN -->
</head>
<body>
    <div class="container">
        <h1 class="my-5">Hi, <b><?php echo htmlspecialchars($username); ?></b>. Welcome to our site.</h1>
        <p>
            <b>Full Name:</b> <?php echo htmlspecialchars($fullName); ?><br>
            <b>Email:</b> <?php echo htmlspecialchars($email); ?>
        </p>
        <p>
            <a href="reset-password.php" class="btn btn-warning">Reset Your Password</a>
            <a href="logout.php" class="btn btn-danger ml-3">Sign Out of Your Account</a>
        </p>
    </div>
</body>
</html>
