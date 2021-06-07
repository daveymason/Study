class Dog{
    constructor(name, numLegs){
        this.name= name;
        this.numLegs = numLegs;
    }
    bark(){
        console.log(`${this.name} barks at the bad squirrel`);
    }
}

const pet1 = new Dog("Max", 4);
pet1.bark();

//Inheritance
class Animal{
    isPet = true;
}
class Dog extends Animal{
    run() {
        console.log("The dog runs");
    }
}
const dog1 = new Dog();
if (dog1.isPet == true){
    console.log("Your pet is an animal")
}else{
    console.log("What is that thing?")
}