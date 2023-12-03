
function Person(name, age){
    this.name = name;
    this.age = age;  
}

Person.prototype.print = function(){
    console.log(this.name, this.age);
    return 5;
}

p1 = new Person('Anurag', 25);
p2 = new Person('Rohit', 35);

console.log(p1)
console.log(p2)
// p1.print();
// p2.print();

let obj = {
    a:1,
    b:2
}

obj1 = Object.create(obj);

console.log(obj1);