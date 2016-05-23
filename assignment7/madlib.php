<?php
ini_set('display_errors', true);
ini_set('display_startup_errors', true);
error_reporting(E_ALL);
?>

<html>
<head>
	<title>PHP: Mad Libs</title>
	<link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
	<h1>Mad Libs Results</h1>
	<hr>
	<?php 
		$noun1=$_GET['noun1'];
		$noun2=$_GET['noun2'];
		$noun3=$_GET['noun3'];
		$adj1=$_GET['adj1'];
		$adj2=$_GET['adj2'];
		$verb1=$_GET['verb1'];
		$verb2=$_GET['verb2'];
		$num=$_GET['num'];
		echo "<h2>Your inputs:</h2>";
		echo "<p>The nouns are $noun1, $noun2, $noun3.</p>";
		echo "<p>The adjectives are $adj1 and $adj2.</p>";
		echo "<p>The verbs are $verb1 and $verb2.</p>";
		echo "<p>The number you entered is $num.</p><br>";
		print("<h2>Here is your mad lib output: </h2>");
		print "<p>The $adj1 $noun1 $verb1 the $adj2 house.</p>";
		print "<p>There she saw a $noun2 $verb2 with $num $noun3.</p>";
		echo "<p><a href='asg7.html'>Back</a></p>";
	?>
</body>
</html>