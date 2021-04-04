<?php
//_SERVER Array
//$_SERVER['SCRIPT_NAME'] returns the path of the current script:
  $addr = $_SERVER['SCRIPT_NAME'];
  echo $addr;

//$_SERVER['HTTP_HOST'] returns the Host header
// from the current request.

echo $_SERVER['HTTP_HOST'];

//Outputs "localhost"

//_GET and _POST Arrays

//First File
?>
<html>
<body>
<form action="first.php" method="post">
  <p>Name: <input type="text" name="name" /></p>
  <p>Age: <input type="text" name="age" /></p>
  <p><input type="submit" name="submit" value="Submit" /></p>
</form>
<?
//Another File
?>
Welcome <?php echo $_POST["name"]; ?><br />
Your age: <?php echo $_POST["age"]; ?>

</body>
</html>