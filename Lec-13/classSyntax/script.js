
class Person{
    constructor(name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    sayHi(){
        console.log('Hii!')
    }

    static sayHello(){
        console.log('Hello!! HRU?');
    }

    // getter(get) and setter(set)
    get getAge() {
        return this.age;
    }

    set setAge(_age){
        this.age = _age;
    }

}

let p1 = new Person('Abhishek', 30, 'Delhi, Ind');

console.log(p1);
p1.sayHi();
// p1.sayHello(); error
Person.sayHello();

// getter and setter
p1.setAge = 40;
console.log(p1.getAge);