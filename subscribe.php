<?php
// Include PHPMailer library files
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

// Database credentials
$host = "localhost";
$dbname = "subscription_db"; // Name of the database you created
$username = "root";
$password = ""; // Default password is blank

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
// Start output buffering
ob_start();

// Validate form inputs
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Invalid email format");
    exit();
}


$mail = new PHPMailer(true);

try {

 // Connect to the database
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);



    // Check if the email already exists
    $stmt = $pdo->prepare("SELECT * FROM subscribers WHERE email = :email");
    $stmt->bindParam(':email', $email);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        
        header("Location: index.html?status=exists");
       
        
        exit();
    }

    // Insert into the database
    $stmt = $pdo->prepare("INSERT INTO subscribers (name, email) VALUES (:name, :email)");
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);
    $stmt->execute();

    // Enable SMTP Debugging
    $mail->SMTPDebug = 3; // 1 = errors and messages, 2 = messages only, 3 = all debug output
    $mail->Debugoutput = 'html';

    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; // Your SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = 'blestystudio@gmail.com'; // Your email address
    $mail->Password = 'fcas itmi oxbm vhgy';   // Use App Password instead of your Gmail password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Enable encryption (TLS/SSL)
    $mail->Port = 587; // SMTP port (587 for TLS)

    // Sender and Recipient Settings
    $mail->setFrom('blestystudio@gmail.com', 'Blesty Studio');
    $mail->addAddress($email, 'Recipient Name'); // Add recipient

    // Email Content
    $mail->isHTML(true); // Set email format to HTML
    $mail->Subject = 'Welcome to Blesty Studio ';

$mail->Body = '
<!DOCTYPE html>
<html>
<head>
    <title>Welcome to Blesty Studio</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <h1>Hi <span style=" text-transform: capitalize;";>' . htmlspecialchars($name) . '</span>,</h1>
    <p>Welcome to the Blesty Studio family! We’re thrilled to have you as part of our creative community.</p>

    <p>Here at Blesty Studio, we’re passionate about empowering musicians and artists to bring their creative visions to life with the best tools and technology available. This newsletter is where we share the latest updates, exclusive content, and behind-the-scenes insights straight from our studio.</p>

    <p>Here’s what you can look forward to:</p>
    <ul>
        <li>🎵 Updates on our latest projects</li>
        <li>📢 Early access to exciting announcements</li>
        <li>💡 Inspiration, tips, and stories from the creative world</li>
    </ul>

    <p>We’re excited to embark on this journey with you. Feel free to hit "Reply" if you have any questions or ideas to share—we’d love to hear from you!</p>

    <p>Let’s make something amazing together.</p>
    <p><strong>Warm regards,</strong><br>
    <strong>Daniel Blesty Yadavalli</strong><br>
    Blesty Studio, K.G.F<br>
    <a href="mailto:blestystudio@gmail.com">blestystudio@gmail.com</a><br>
    +91 9344147330</p>
</body>
</html>
';

$mail->AltBody = 'Hi ' . $name . ',
Welcome to the Blesty Studio family! We’re thrilled to have you as part of our creative community.

Here at Blesty Studio, we’re passionate about empowering musicians and artists to bring their creative visions to life with the best tools and technology available. This newsletter is where we share the latest updates, exclusive content, and behind-the-scenes insights straight from our studio.

Here’s what you can look forward to:
- Updates on our latest projects
- Early access to exciting announcements
- Inspiration, tips, and stories from the creative world

Let’s make something amazing together.

Warm regards,
Daniel Blesty Yadavalli
Blesty Studio, K.G.F
blestystudio@gmail.com
+91 9344147330';


    // Send Email
    $mail->send();
    //  echo "<script >window.history.back(); alert('Successfully subscribed!'); </script>";
        // Redirect with success message
        header("Location: index.html?status=success");
} catch (Exception $e) {
    header("Location: index.html?status=error");
}

ob_end_flush(); //end buffer output
?>
