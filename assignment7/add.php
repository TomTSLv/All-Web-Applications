<?php
ini_set('display_errors', true);
ini_set('display_startup_errors', true);
error_reporting(E_ALL);
?>

<html>
<head>
	<title>PHP: Calculator</title>
	<link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
	<h1>Calculator Result</h1>
	<hr>
	<?php 
		$num1=$_GET['num1'];
		$num2=$_GET['num2'];
		$operator=$_GET['operator'];
		if ($operator=="+"){
			$result=(float)$num1+(float)$num2;
		}
		elseif ($operator=="-") {
			$result=(float)$num1-(float)$num2;
		}
		elseif ($operator=="*") {
			$result=(float)$num1*(float)$num2;
		}
		else{
			$result=(float)$num1/(float)$num2;
		}
		print "<p>$num1 $operator $num2 = $result</p>";
		echo "<p><a href='asg7.html'>Back</a></p>";
	?>
</body>
</html>