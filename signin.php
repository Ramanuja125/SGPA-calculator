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
$password = $_POST["password"];



$sql = mysqli_query($conn, "SELECT count(*) as total from registration WHERE username = '".$username."' and 
	password = '".$password."'");

$row = mysqli_fetch_array($sql);

if($row["total"] > 0){
	?>
	<script>
		alert('Login successful');
	</script>
	
	<?php
	header("Location: sgpa.html");
}
else{
    
	?>
    
	<script>
		alert('Login failed');
	</script>
	<?php
}








?>