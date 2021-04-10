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

//Practice
class Musician {
    public $name;
    public function toPlay() {

    echo "Playing on piano";
        }
    }

class Singer extends Musician {
    //expand on this
}
