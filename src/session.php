<?php
// Initialize the session
session_start();

// Check if the user is already logged in, if not then redirect to login page
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("location: login.php");
    exit;
}

// Include config file for database connection
require_once "config.php";

// Define variables
$userId = $_SESSION["id"];
$username = $fullName = $email = "";

// Prepare a select statement to fetch user information
$sql = "SELECT username, fullName, email FROM users WHERE id = ?";

if($stmt = mysqli_prepare($link, $sql)) {
    mysqli_stmt_bind_param($stmt, "i", $param_id);
    $param_id = $userId;

    if(mysqli_stmt_execute($stmt)) {
        mysqli_stmt_store_result($stmt);

        if(mysqli_stmt_num_rows($stmt) == 1) {
            mysqli_stmt_bind_result($stmt, $username, $fullName, $email);
            mysqli_stmt_fetch($stmt);
        }
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }

    mysqli_stmt_close($stmt);
}

// Close database connection
mysqli_close($link);
?>
