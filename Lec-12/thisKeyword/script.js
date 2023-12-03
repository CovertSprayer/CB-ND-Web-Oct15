// -------------------- default binding
// console.log(this);
// this.a = 10;

function temp(){
    console.log(this);
}

// temp();

// --------------------- implicit binding

let obj = {
    a:1,
    b:true,
    c:function(){
        console.log(this);
    },
    print:function(){
        console.log(this.a, this.b);
    }
}

obj.c();
obj.print();



var person1 = {
    name:'Abhishek',
    age:30,
    gender:'M',
    address:'Noida, Ind'
}

var person2 = {
    name:'John',
    age:25,
    gender:'M',
    address:'LA, USA'
}

// function updateAdd(person, _address){
//     person.address = _address;
// }
function updateAdd(_address, age){
    this.address = _address;
    this.age = age;
}

// updateAdd('Mumbai, Ind');
// updateAdd.call(person2, 'Delhi, Ind', 40);
updateAdd.apply(person2, ['New Delhi, Ind', 10]);

// console.log(window);
console.log(person2);

// ------------------------------ new keyword

function Person(name, age){
    this.name = name;
    this.age = age;
}

// person1 = Person('Abhinav', 35);
person1 = new Person('Abhinav', 35);
console.log(window);
console.log(person1);