<?php
    //Define a Class
    class User {
        //properties (Attributes)
        public $name;
        // methods (functions)
        public function sayHello(){
            return $this->name .'says Hello';
        }
    }

    //Instantiate a user object from user class
    $user1 = new User();

    $user1->name = 'Davey';
    echo $user1->name;
    echo '<br>';
    echo $user1->sayHello();

    // Create new user
    $user2 = new User();
    $uer2->name = 'Jun';
    echo $user2->name;
    echo '<br>';
    echo $user2->sayHello();

    //This Keyword
    class Dog {
        public $legs=4;
        public function display() {
            echo $this->legs;
        }
    }
    $d1 = new Dog();
    $d1->display();
    
    echo '<br />';
    
    $d2 = new Dog();
    $d2->legs = 2;
    $d2->display();


    /* *********************
    ********PRACTICE********
    ************************ */

    class Person {
        public $age; //property
        public function speak() { //method
          echo "Hi!";
        }
      }

    class Student {
     public $name;
     public $age;
     
    public function sayHi() { 
        echo "Hi!"; } 
     }

//Creating an object of a class is called instantiation.
    $bob = new Person();
    echo $bob->age;

    /*Define the Person class, instantiate an object, 
    make an assignment, and call the speak() method*/
    class Person {
        public $age;
        function speak() {
            echo "Hi!";
        }
        function shout() {
            echo "AAAAAAHHHHHH!";
        }
    }
    $p1 = new Person(); // Instantiate an object
    $p1->age = 23;   // Assignment
    echo $p1->age;   // 23
    $p1->speak();    // Hi!
    $p1->shout();    // AAAAAAHHHHHH!

    class Car{
        public $brand;
        function honk(){
            echo "Beep beep";
        }
        function brandName(){
            echo $this->brand;
        }
    }

    $c1 = new Car();
    $c1->brand = Toyota;
    $c1->honk();
    echo brand; // Toyota
    $c1->brandName(); // Toyota

    class Pokemon{
        public $type;
        function typeOutput(){
            echo $this->type;
        }
    }

    $pokemon1 = new Pokemon();
    $pokemon1->$type = "fire";
    $pokemon1->typeOutput();  //fire