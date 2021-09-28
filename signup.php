<?php  

$servername ="localhost";
$uasername = "root";
$password = "";
$dbname = "project";

$conn = new mysqli($servername, $uasername, $password, $dbname);

if($conn->connect_error){
	die("connection failed");
}

$username = $_POST["username"];
$email = $_POST["email"];
$password = $_POST["password"];
$phone = $_POST["phone"];



$sql = "INSERT INTO registration (username, email, password,phone) 
VALUES ('$username', '$email', '$password','$phone')";

if($conn->query($sql) === TRUE){
	?>
	<script>
		alert('Values have been inserted');
	</script>
	<?php
	header("Location: index.html");
}
else{
	?>
	<script>
		alert('Values did not insert');
	</script>
	<?php
}


?>




















