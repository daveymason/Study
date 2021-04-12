<?php
//fopen will create and open a file
//the letter gives it specific instructions
fopen('test.txt', 'w');

//Writing to a file
$myfile = fopen("names.txt", "w");

$txt = "John\n";
fwrite($myfile, $txt);
$txt = "David\n";
fwrite($myfile, $txt);

fclose($myfile); // closes an open file and returns TRUE on success or FALSE on failure.

/* File contains:
John
David
*/

//Above code creates and new file called names.txt

//Appending to a file
$myFile = "test.txt";
$fh = fopen($myFile, 'a'); //'a' adds to the end of the file
fwrite($fh, "Some text");
fclose($fh);

//Form that ads filled in data to a file
if(isset($_POST['text'])) {
  $name = $_POST['text'];
  $handle = fopen('names.txt', 'a');
  fwrite($handle, $name."\n");
  fclose($handle); 
}
?>
<form method="post">
  Name: <input type="text" name="text" /> 
  <input type="submit" name="submit" />
</form>
<?
//Reading a file
//file() - reads the entire file into an array
$myfile = fopen("names.txt", "w");

$txt = "John\n";
fwrite($myfile, $txt);
$txt = "David\n";
fwrite($myfile, $txt);

fclose($myfile);

$read = file('names.txt');
$count = count($read);
$i = 1;
foreach ($read as $line) {
    echo $line;
    if($i < $count) {
        echo ', ';
    }
    $i++;
}
//This avoids printing that final comma, 
//as for the last line, $i is equal to $count.