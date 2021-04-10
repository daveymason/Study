<?php
class User{
    private $name;
    private $age;

    public function __construct($name, $age){
        $this->name=$name;
        $this->age=$age;
    }

    public function getName(){
        return $this->name;
    }

    public function setName($name){
        $this->name = $name;
    }

    //__get MAGIC METHOD
    public function __get($property){
        if(property_exists($this, $property)){ //check if the property exists in the class
            return $this->$property; 
        }
    }

    //__set MAGIC METHOD
    public function __set($property, $value){
        if(property_exists($this, $property)){
            $this->$property = $value;
        }
        return $this;
    }
}

//Uses the getName function
$user1 = new User('John', 40);
echo $user1-> setName('Jeff');
echo $user1-> getName();
//outputs Jeff

//Uses Magic Method
$user1->__set('name', 'Jeff');
echo $user1->__get('name');
//Jeff

$user1->__set('age', 41);
echo $user1->__get('age');
//40

