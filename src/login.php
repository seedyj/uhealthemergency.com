// User-provided data (e.g., from a login form)
$username = $_POST['username'];
$inputPassword = $_POST['password'];

// Prepare SQL statement to fetch the user
$sql = "SELECT id, username, password FROM users WHERE username = :username";

// Prepare and execute the statement
$stmt = $pdo->prepare($sql);

$stmt->execute([':username' => $username]);

// Fetch the user
$user = $stmt->fetch(PDO::FETCH_ASSOC);

// Verify the password
if ($user && password_verify($inputPassword, $user['password'])) {
    // Start a new session and set user as logged in
    session_start();
    $_SESSION["loggedin"] = true;
    $_SESSION["id"] = $user['id'];
    $_SESSION["username"] = $user['username'];
    
    echo "Successfully logged in.";
} else {
    echo "Invalid username or password.";
}
