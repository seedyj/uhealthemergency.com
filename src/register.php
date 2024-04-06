// Assuming you're using PDO for database connection

// User-provided data (e.g., from a form submission)
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

// Hash the password
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Prepare SQL statement to insert a new user
$sql = "INSERT INTO users (username, email, password) VALUES (:username, :email, :hashedPassword)";

// Prepare and execute the statement
$stmt = $pdo->prepare($sql);

$stmt->execute([
    ':username' => $username,
    ':email' => $email,
    ':hashedPassword' => $hashedPassword
]);

// Check if the insert was successful
if ($stmt->rowCount()) {
    echo "User registered successfully.";
} 
else {
    echo "An error occurred.";
}
