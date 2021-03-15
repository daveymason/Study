
Variables 
/*
Rules for PHP variables:
- A variable name must start with a letter or an underscore
- A variable name cannot start with a number
- A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )
- Variable names are case-sensitive ($name and $NAME would be two different variables)
*/

<?php
    $name = 'John';
    $age = 25;
    echo $name;
?>

Constants are similar to variables except that they cannot be changed or undefined after they've been defined.
Begin the name of your constant with a letter or an underscore.
To create a constant, use the define() function:

define(name, value, case-insensitive)

<?php
define("MSG", "Hello There!");
echo MSG;

//Outputs: Hello There!
?>

<?php
define("AGE", 28);
echo AGE;

//Outputs: 28
?>

DataTypes


<?php

//String
$string1 = "Hello!"; //Double quotes
$string2 = 'Hello'; //Why error?

//Integer
$int1 = 42;
$int2 = -42;

//Float
$x = 42.168;

//Boolean
$x = true;
$y =  false;

//Php automatically converts data types
$str = "10";
$int = 20;
$sum = $str + $int;
echo ($sum);
//30

//Variable Scope - Global
$name = 'David';
function getName(){
    global $name;   //use global keyword to acces a global variable from within a function
    echo $name;
}
getName()
//Outputs 'David'

//Variable Variables
$a = 'hello';
$hello = "Hi!";
echo $$a
//outputs 'Hi!'

//$$a is a variable that is using the value of another variable

//Operators 
$num1 = 23;
$num2 = 16;

echo $num1 - $num2;

//Modulus
$x = 14;
$y = 3;
echo $x % $y; //2

//Increment and Decrement
$x++; // post-increment 
$x--; // post-decrement 
++$x; // pre-increment 
--$x; // pre-decrement

//Assignment operators
$a = 7; $b = 3; 
$a += $b;
echo $a; //10

//Logical Operators
$x && $y //true if both are true
$x || $y //true if either are true
!$x //true if x is not true