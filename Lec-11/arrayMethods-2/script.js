const data = [10, 20, 30, 40, 50];

const newData = data.map((num, ind, arr) => {
    return num + 10;
    // return `<i>${num}</i>`;
})

const filteredData = data.filter((num, ind) => {
    // console.log(null < 30)
    return num > 30;
    // if(num < 30){
    //     return true;
    // }
    // else
    //     return false;
})

console.log(filteredData);
console.log(newData);

const students = [
    { id: 1, name: 'Rahul', age: 16 },
    { id: 2, name: 'Manish', age: 18 },
    { id: 3, name: 'Mohit', age: 26 },
    { id: 4, name: 'Kartik', age: 36 }
]

const teens = students.filter((student)=>{
    return student.age < 18;
});

console.log(teens);

// ------------------ reduce  (return a value)

const totalSum = data.reduce((acc, num, ind, arr)=>{
    return acc + num;
}, 100)

console.log(totalSum);

const menu = ['Paneer Tikka', 'Manchurian', 'Chicken Kabab', 'Pizza', 'Burger', 'Butter Naan', 'Fish Fry'];

const vegMenu = menu.filter(isVeg);

function isVeg(item){
    if(!item.toLowerCase().includes('chicken') && 
        !item.toLowerCase().includes('fish'))
        return true;
}

console.log(vegMenu);
