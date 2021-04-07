<?php
//The magic method __construct(), which is called 
//automatically whenever a new object is instantiated.

class Person{
    public $name;
    public $age;

    public function __construct($name, $age) {
        $this->name = $name;
        $this->age= $age;
    }
}

$p = new Person("Davey", 42);

//Destructor

class Person {
    public function __destruct() {
        echo "Object destroyed";
    }
}
$p = new Person();

//Example 1
class TestMe {
    public function __construct() { echo "2"; }
    public function __destruct() { echo "1"; }
  }
  $test = new TestMe();
  unset($test);

  //Outputs "21"
  