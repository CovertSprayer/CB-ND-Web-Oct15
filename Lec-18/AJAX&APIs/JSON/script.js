const student = {
    name:'Abhinav',
    age:30,
    gender:'M',
    isMarried:false,
    sayHello:function(){
        console.log('Hello World!');
    }
}

console.log(student)
student.sayHello();

let data = JSON.stringify(student);
console.log(data);

console.log(JSON.parse(newData));