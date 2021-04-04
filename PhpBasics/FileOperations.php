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
$fh = fopen($myFile, 'a');
fwrite($fh, "Some text");
fclose($fh);