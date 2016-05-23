<html>
<head>
	<title>Online Store</title>
	<link rel="stylesheet" type="text/css" href="online.css">
</head>

<body>
	<h1>Welcome to our online store</h1>
	<p align=center><img src="php.gif" width="100%" height="300px"></p>
	<p>You can check our products and process your purchase on this page.</p>
	<hr>
	<form action="online.php" method=post>
		<label for="name">Name: </label>
		<input type=text name="name" id="name"><br>
		<label for="email">Email: </label>
		<input type=email name="email" id="email"><br>
		<label for="products">Products (Please click the item so that you can choose the quantity): </label>
		<select name="products" id="products" multiple>
			<option value="three_body" onclick="change()">The Three-Body Problem (By Cixin Liu)</option>
			<option value="solitude" onclick="change()">One Hundred Years of Solitude (By Gabriel García Márquez)</option>
		</select><br>
		<div id="product1" style="visibility:hidden">
			<label for="item1">How many <i>The Three-Body Problem</i> do you want? (Price: 15.59)</label>
			<input type=text name="item1" id="item1" value="0"><br>	
		</div>
		<div id="product2" style="visibility:hidden">
			<label for="item2">How many <i>One Hundred Years of Solitude</i> do you want? (Price: 20.13)</label>
			<input type=text name="item2" id="item2" value="0"><br>
		</div>
		<input type=submit name="submit" id="submit">
		<input type=reset name="reset" id="reset">
		<p><a href='asg7.html'>Back</a></p>
	</form>
	<script type="text/javascript">
		function change(){
			var productArray=["product1","product2"];
			var itemArray=["item1","item2"];
			for (var i=0;document.getElementById("products").options.length;i++){
				if (document.getElementById("products").options[i].selected){
					document.getElementById(productArray[i]).style.visibility="visible";
					document.getElementById(itemArray[i]).value="1";
				}
			}
		}
	</script>

	<?php
		$threeBody=15.59;
		$hundred=20.13;
		if (isset($_POST['submit'])){
			$threeBodyNum=$_POST['item1'];
			$hundredNum=$_POST['item2'];
			$subtotal1=(float)$threeBodyNum*$threeBody;
			$subtotal2=(float)$hundredNum*$hundred;
			$total=$subtotal1+$subtotal2;
			echo "<hr>";
			echo "<div id='receipt'>";
			echo "<h2>Your Receipt: </h2>";
			$name=$_POST['name'];
			$email=$_POST['email'];
			echo "<p>Customer Name: $name</p>";
			echo "<p>Email: $email</p>";
			echo "<p>Items Purchased:</p>";
			echo "<p>The Three-Body Problem: $$threeBody * $threeBodyNum = $$subtotal1</p>";
			echo "<p>One Hundred Years of Solitude: $$hundred * $hundredNum = $$subtotal2</p><br>";
			echo "<p>Total: $$total";
			echo "</div>";
		}
		else{
			echo "<p>You need to fill out the form and then click the submit button</p>";
		}
	?>
</body>
</html>