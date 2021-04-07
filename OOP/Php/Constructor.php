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