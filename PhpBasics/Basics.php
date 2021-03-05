
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
