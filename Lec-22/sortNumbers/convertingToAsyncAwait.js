const fs = require('fs');
const path = require('path');

function getData(filePath){
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data)=>{
            if(err) reject(err);
            resolve(data);
        })
    })

    // fs.readFile(filePath, 'utf-8')
    //     .then(data => console.log(data))

    
}

const filePath1 = path.join(__dirname, 'data', 'input1.txt');
const filePath2 = path.join(__dirname, 'data', 'input2.txt');
const finalPath = path.join(__dirname, 'data', 'output.txt');

async function main(){
    const data1 = await getData(filePath1);
    const data2 = await getData(filePath2);

    const arr1 = data1.split('\n');
    const arr2 = data2.split('\n');

    const arr = arr1.concat(arr2);
    arr.sort((a,b)=>b-a);

    const finalData = arr.join('\n');

    fs.writeFile(finalPath, finalData, ()=>{
        console.log('All Done!!')
    });
}

main();