// a = 10;
// b = 20;

// console.log(a,b);
// ----------------------- number
age = 20;
PI = 3.14; // var PI = 3.14
console.log(age, typeof age);
console.log(PI, typeof PI);

// ----------------------- boolean
var isValid = true;
console.log(isValid, typeof isValid);

// ----------------------- string
var str = "Hello World";
console.log(str, typeof str);

var char = 'a';
console.log(char, typeof char);

// ----------------------- array
var arr = [1,2,'a',4];
console.log(arr, typeof arr);

// ----------------------- object
var obj = {
    a:1,
    b:2,
    "full name":'Rahul',
    age:24,
    coursesEnrolled: ['Java', 'C++', 'Web Dev']
}

console.log(obj, typeof obj);
console.log(obj["full name"]);
console.log(obj.coursesEnrolled);

// ----------------- undefined

var newArr;
console.log(newArr, typeof newArr);

// -------------- loosely coupled
var z = 100;
z = "this is some random text"
console.log(z, typeof z);


// == loose equality 
// === strong equality
console.log(10 == "10"); //true
console.log(10 === "10"); //false