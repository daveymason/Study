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