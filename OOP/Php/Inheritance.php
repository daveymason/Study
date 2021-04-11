<?php
class Animal {
    public $name;
    public function hi() {
        echo "Hi from Animal";
    }
}
class Dog extends Animal {
}

$d = new Dog();
$d->hi();

//Interface
interface AnimalInterface {
    public function makeSound();
}

class Dog implements AnimalInterface {
    public function makeSound() {
        echo "Woof! <br />";
    }
}
class Cat implements AnimalInterface {
    public function makeSound() {
        echo "Meow! <br />";
    }
}

$myObj1 = new Dog();
$myObj1->makeSound();

$myObj2 = new Cat();
$myObj2->makeSound();

//Abstract Class
abstract class Fruit { 
    private $color; 
    
    abstract public function eat(); //A class inheriting from an abstract class must implement all the abstract methods.
    
    public function setColor($c) { 
        $this->color = $c; 
    } 
} 

class Apple extends Fruit {
    public function eat() {
        echo "Omnomnom";
    }
}

$obj = new Apple();
$obj->eat();

//Practice
interface Musician {
    public function toPlay();

    }

class Singer implements Musician {
    public function toPlay(){
     echo "Sings";
    }
}

//Abstract class practice
abstract class Calc { 
    abstract public function calculate($param); 
    protected function getConst() { return 4; }
  } 
  class FixedCalc extends Calc {
    public function calculate($param) {
      return $this->getConst() + $param;
    }
  }
  $obj = new FixedCalc();
  echo $obj->calculate(38);
  //Outputs 42


//Practice
class User{
    protected $name = 'Dave';
    protected $age;

    public function __construct($name, $age){
        $this->name=$name;
        $this->age=$age;
    }
}

class Customer extends User{
    private $balance;

    public function __construct($name, $age, $balance){
        parent::__construct($name, $age);
        $this->balance=$balance;

    }
    public function pay($amount){
        return $this->name . ' paid $' . $amount;
    }

    public function getBalance(){
        return $this->balance;
    }
}

$customer1 == new Customer('Jun', 33, 500);
echo $customer1->getBalance(); //500