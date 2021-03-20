<?php
//If Statement
if ($age > 18)
{
    echo "Welcome";
}


//If - Else

$x = 10;
$y = 20;

if ($x >= $y) {
    echo $x;
} else { 
    echo $y;
}
//Outputs "20"

if (age == 18){
    echo "Happy 18th Birthday";
} elseif (age <18){
    echo "You are not 18 yet";
} else {
    echo "Hope you enjoyed your 18th birthday";
}

//The while loop
//The while loop executes a block of code as long as the specified condition is true.
$i =1;
while ($i <= 15) {
    echo $i;
    $i++;
 }

 //The do...while Loop
//The do...while loop will always execute the block of code once, 
//check the condition, and repeat the loop as long as the specified condition is true.

$i = 1;
do {  echo "Hello"; }
while($i < 0);
//Will still run once

//The for Loop