// ()
// (()=>{})
// (()=>{})()

const obj = (()=>{
    let person = {
        name:'Rahul',
        age:24
    }

    // console.log(person);
    function getAge(){
        return person.age;
    }

    function updateAge(_age){
        person.age = _age;
    }

    return {
        getAge,
        updateAge
    }
})()

console.log(obj);
obj.updateAge(50);
console.log(obj.getAge());