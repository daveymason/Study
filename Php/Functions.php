<?php
//What output results from the following code?
function test($num) {
    echo $num/2;
}
test(14);
//Outputs 7

//Function parameters
function myMul($num1, $num2)  {
    echo $num1 * $num2;
}
//Multiplies the parameters#

//Return statement
function mult($num1, $num2){
    $res = $num1 + $num2;
    return $res;
}

echo mult(8,3);
//outputs 24

function func($arg)  {

    $result = 0;
    for($i=0; $i<$arg; $i++) {
      $result = $result + $i;
    }
    return $result;
  }
  
  echo func(5);
//returns 10. 
//Result goes to 4 and then adds by 6 in the final cycle

function greet($name) {
    return "Welcome ".$name;
  }
  
  echo greet('Robert');
  //Outputs Roboert
