arr = [1,2,3,4,5,6];

// ----------------- normal loop
// for(var i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// -------------------- for of
newArr = [];
for(var num of arr){
    newArr.push(2*num);
}

// arr = [1,2,3,4,5,6];
person = {
    name:'Rohit',
    age: 36,
    food:'Vada pav',
    trophy:5
}

// --------------------- for in
for(var key in arr){
    console.log(key, arr[key]);
}

for(var key in person){
    console.log(key, ': ', person[key]);
}

// --------------- forEach() -> aage pdenge