const fs = require('fs');
const path = require('path');

const data = "This is some random string";
// const filePath = __dirname + '/data/output.txt'
const filePath = path.join(__dirname, 'data', 'output2.txt');

// fs.writeFile(filePath, data, (err)=>{
//     if(err) return console.log(err);

//     console.log('File written successfully!');
// })

fs.readFile(filePath, 'utf-8', (err, data)=>{
    if(err){
        console.log(err);
        return;
    }
    let newData = data.replaceAll(' ', '\n');
    console.log(newData);
})