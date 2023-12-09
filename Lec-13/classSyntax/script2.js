
class Person{
    constructor(name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    sayHi(){
        console.log('Hii!')
    }
}

class Student extends Person{
    constructor(name, age, address, course, school){
        super(name, age, address)
        this.course = course;
        this.school = school;
    }
}

s1 = new Student('Arun', 28, 'Noida, Ind', 'BTech', 'IIT-D');
console.log(s1);
s1.sayHi();