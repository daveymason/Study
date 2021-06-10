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
      this.students= [];
    }
    registerStudent(student){
      let hasStudent = this.students.includes(this.email);
        if(hasStudent === true){
            console.log("Student already registered");
        }else{ 
          this.students.push(this.email)
          console.log(`Registering ${this.email} to the bootcamp Web Dev Fundamentals`);
        }
        return this.students;
    }
  }