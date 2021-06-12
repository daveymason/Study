class Student{
    constructor(name, email, community){
      this.name = name;
      this.email = email;
      this.community = community;
    }
  }

  class Bootcamp{
    constructor(name, level, students = []){
      this.name = name;
      this.level= level;
      this.students= students;
    }
    registerStudent(Student){
      let hasStudent = this.students.includes(Student.email);
        if(hasStudent === true){
            console.log("Student already registered");
        }else{ 
          this.students.push(Student)
          console.log(`Registering ${Student.email} to the bootcamp ${this.name}`);
        }
        return this.students;
    }
  }