<?php
//Numeric Arrays
$names = array("David", "Amy", "John");
echo $names[1]; //outputs "Amy"

//Associative Arrays
//Associative arrays are arrays that use named keys that you assign to them.
$people = array("David"=>"27", "Amy"=>"21", "John"=>"42");
//Syntax is "key" => "value"
echo $people['Amy']; //Outputs 21