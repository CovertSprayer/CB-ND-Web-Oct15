const fs = require('fs');
const path = require('path');

function getData(filePath){
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data)=>{
            if(err) reject(err);
            resolve(data);
        })
    })
}

const filePath1 = path.join(__dirname, 'data', 'input1.txt');
const filePath2 = path.join(__dirname, 'data', 'input2.txt');

getData(filePath1)
    .then((data1)=>{
        getData(filePath2)
            .then((data2)=>{
                let arr1 = data1.split('\n');
                let arr2 = data2.split('\n');
                let arr = [...arr1, ...arr2];


                arr.sort((a,b)=>a-b);
                let finalData = arr.join('\n');

                let finalPath = path.join(__dirname, 'path', 'output.txt');
                fs.writeFile(finalPath, finalData, (err)=>{
                    if(err){
                        console.log(err);
                        return;
                    }
                    console.log('File written successfully!');
                })
            })
    })

    