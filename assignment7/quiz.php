<html>
<head>
	<title>Quiz Result</title>
	<link rel="stylesheet" type="text/css" href="main.css">
</head>

<body>
	<h1>Check Your Quiz Result for PHP</h1>
	<p align=center><img src="php.gif" width="100%" height="300px"></p>
	<hr>

	<?php
		$answers = array('q1' => 'c', 'q2' => 'a', 'q3' => 'b');
		$questions = array('q1' => '1. What does PHP stand for?', 'q2' => '2. How do you write "Hello World" in PHP?', 'q3' => '3. All variables in PHP start with which symbol?');
		$fname=$_POST['fname'];
		$lname=$_POST['lname'];
		$correct=0;
		foreach ($questions as $key => $value) {
			$userAnswer=$_POST[$key];
			$correctAnswer=$answers[$key];
			echo "<p>$value</p>";
			echo "<p>Your Answer: $userAnswer. ";
			if ($userAnswer==$answers[$key]) {
				echo "Correct!!</p>";
				$correct++;
			}
			else echo "Sorry you're wrong!</p>";
			echo "<p>Correct Answer: $correctAnswer.</p>";
			echo "<hr>";
		}
		echo "<h2>Result: </h2>";
		$result=(float)$correct/(float)count($questions)*100;
		echo "Your score this time is: $result";
		echo "<p><a href='asg7.html'>Back</a></p>";
	?>
</body>
</html>