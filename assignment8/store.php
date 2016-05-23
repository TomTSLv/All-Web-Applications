<!DOCTYPE HTML>
<html>
<head>
	<title>Online Record Store</title>
	<link rel="icon" type="image/png" href="icon.png">
	<link rel="stylesheet" type="text/css" href="main.css">
	<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
</head>

<body>
	<div align=center>
	<h1>Tom's Music Record Online Store</h1>
	<p>Welcome to our online record store. Hope you can find your favorite music here!</p>
	<hr>
	<form action="store.php" method=post>
		<aside>
			<input type=search name="keyword" id="keyword">
			<button type=submit value="search" name="search" id="search">Search</button>
		</aside>
		<div id="register">
			<fieldset>
				<p>Please first enter your user name and password</p>
				<label for="username">User Name: </label>
				<input type=text name="username" id="username"><br>
				<label for="password">Password: </label>
				<input type=password name="password" id="password"><br>
				<label for="old">Please sign in here: </label>
				<button type=submit name="old" id="new">Sign in</button><br>
				<label for="new">If you are a new customer, please: </label>
				<button type=submit name="new" id="new">Register</button>
			</fieldset>
		</div>
		<div id="store" style="display:none">
			<p>Please enter the number of albums you want to buy for each one and click the "Check Out" button to get the receipt.</p>
		  	<fieldset>
				<table id="item1">
					<tr onclick="purchase('red')">
		 				<td><img src="red.jpg" width=100 height=100></td>
					  	<td style="font-family:chalkboard">&nbsp&nbsp&nbspRed (October 2012)</td>
					</tr>
				</table>
				<p>Please click the item (either photo or word) to choose</p>
				<br>
		  		<label for="price1">Price: $</label>
			  	<input type=number name="price1" id="price1" value=13.29 style="-webkit-appearance:none" readonly><br>
		  		<div id="product1" style="visibility:hidden">
					<label for="quantity1">Quantity Ordered: </label>
					<input type=number name="quantity1" id="quantity1" onchange="total()" value=0 min=0>
					<label for="subtotal1">Subtotal: $</label>
					<input type=number name="subtotal1" id="subtotal1" value=0 readonly>
				</div>
		  	</fieldset>

			<fieldset>
				<table id="item2">
					<tr onclick="purchase('1989')">
						<td><img src="1989.jpg" width=100 height=100></td>
						<td style="font-family:chalkboard">&nbsp&nbsp&nbsp1989 (October 2014)</td>
					</tr>
				</table>
				<p>Please click the item (either photo or word) to choose</p>
				<br>
				<label for="price2">Price: $</label>
				<input type=number name="price2" id="price2" value=12.69 style="-webkit-appearance:none" readonly><br>
				<div id="product2" style="visibility:hidden">
					<label for="quantity2">Quantity Ordered: </label>
					<input type=number name="quantity2" id="quantity2" onchange="total()" value=0 min=0>&nbsp&nbsp&nbsp
					<label for="subtotal2">Subtotal: $</label>
					<input type=number name="subtotal2" id="subtotal2" value=0 readonly>
				</div>
			</fieldset>

			<fieldset>
				<label for="grandtotal">Grand Total: $</label>
				<input type=number name="grandtotal" id="grandtotal" value=0 readonly>
				<button type=submit name="submit" id="submit">Check Out</button>
			</fieldset>
	</div>
	</form>

	<?php
		$username=$_POST['username'];
		$password=$_POST['password'];
		function store(){
			global $username, $password;
			if ($username=="" || $password=="") return;
			$line=$username.":".$password."\n";
			$file=fopen("users.txt", "a") or die("errors when opening and writing the file");
			fwrite($file, $line) or die("cannot write into the file");
			fclose($file);
			echo "<script>alert('Thank you, $username for joining our record store');";
			echo "document.getElementById('register').style.display='none';";
			echo "document.getElementById('store').style.display='inline';</script>";
		}

		function login(){
			$right=FALSE;
			global $username, $password;
			$file=fopen("users.txt", "r") or die("error when opening or reading the file");
			while (!feof($file)) {
				$line=fgets($file);
				$line=trim($line);
				$info=explode(":", $line);
				if ($info[0]==$username && $info[1]==$password){
					$right=TRUE;
					break;
				}
			}
			if ($right){
				echo "<script>alert('Welcome back, $username!');";
				echo "document.getElementById('register').style.display='none';";
				echo "document.getElementById('store').style.display='inline';</script>";
			}
			else{
				echo "<script>alert('Please enter a valid user name or password!');</script>";
			}
		}

		function search(){
			echo "<script>document.getElementById('register').style.display='none';</script>";
			$search=$_POST['keyword'];
			$file=fopen("product.txt", "r") or die("error when opening or reading the file");
			$get=FALSE;
			while (!feof($file)) {
				$line=fgets($file);
				$info=explode(":", $line);
				if ($info[0]=="Name of product" && trim($info[1])==$search){
					$name=$info[1];
					echo "<h2>$name</h2>";
					$line=fgets($file);
					$info=explode(":", $line);
					$key=$info[0];
					$value=$info[1];
					echo "<p>$key: $value</p>";
					$line=fgets($file);
					$info=explode(":", $line);
					$key=$info[0];
					$value=$info[1];
					echo "<p>$key: $value</p>";
					$line=fgets($file);
					$info=explode(":", $line);
					$key=$info[0];
					$value=$info[1];
					echo "<p>$key: $value</p>";
					$get=TRUE;
				}
			}
			fclose($file);
			if ($get==FALSE) echo "<p>No Search Result Found.</p>";
		}

		function receipt(){
			global $username;
			$price1=$_POST['price1'];
			$price2=$_POST['price2'];
			$redNum=$_POST['quantity1'];
			$nineteenNum=$_POST['quantity2'];
			$subtotal1=$_POST['subtotal1'];
			$subtotal2=$_POST['subtotal2'];
			$total=$subtotal1+$subtotal2;
			echo "<hr>";
			echo "<div id='receipt'>";
			echo "<h2>Your Receipt: </h2>";
			echo "<p>Customer Name: $username</p>";
			echo "<p>Items Purchased:</p>";
			echo "<p>Red: $$price1 * $redNum = $$subtotal1</p>";
			echo "<p>1989: $$price2 * $nineteenNum = $$subtotal2</p><br>";
			echo "<p>Total: $total</p>";
			echo "</div>";
		}

		if (isset($_POST['new'])){
			store();
		}
		else if (isset($_POST['old'])){
			login();
		}
		else if (isset($_POST['search'])){
			search();
		}
		else if (isset($_POST['submit'])){
			receipt();
		}
	?>
	<script type="text/javascript" src="main.js"></script>
</div>
</body>
</html>