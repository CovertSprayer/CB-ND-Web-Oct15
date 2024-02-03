const express = require('express');
const app = express();
const path = require('path');
const todos = ['Do some Gaming', 'Some Coding', 'Buy something'];

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.send('Working Fine!');
})

app.get('/todos', (req, res)=>{
       res.status(200).json({
            success:true,
            todos
       }) 
})

const PORT = 4444;
app.listen(PORT,()=>{
    console.log('Server is Up at Port ', PORT);
});