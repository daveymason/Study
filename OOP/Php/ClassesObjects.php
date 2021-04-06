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
    }
    $p1 = new Person(); // Instantiate an object
    $p1->age = 23;   // Assignment
    echo $p1->age;   // 23
    $p1->speak();    // Hi!