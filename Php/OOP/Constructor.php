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
  
class user{
    public $name;
    public $age;

    //Runs wehen an object instantiated
    public function __construct($name, $age){
        echo 'Class ' . __CLASS__ . 'instantiated'; //Magic constant that gives name of current class
        $this-> name = $name;
        $this-> age = $age;
    }

    public function sayHello(){
        return $this->name . ' Says Hello';
    }

    //Default, called when no references to other objects
    //used for cleanup and closing connections
    public function __destruct(){
        echo 'destructor ran...';
    }
}

$user1 = new User('Dave', 30);   

echo $user1->name . ' is ' . $user1->age . ' years old';
//Outputs Dave is 30 years old
echo'<br>';
echo $user1->sayHello();
//Outputs Dave says Hello

$user2 = new User('Jun', 26);   

echo $user2->name . ' is ' . $user2->age . ' years old';
//Outputs Jun is 26 years old
echo'<br>';
echo $user2->sayHello();
//Outputs Jun says Hello
