const express = require('express')
const app = express()
const port = 4444;

app.get('/cat', (req, res)=>{
    // res.send('Meowww!!');
})

app.get('/dog', (req, res)=>{
    res.send('Woof! Woof!');
})

app.get('/', (req, res) => {
//   res.send('Hello World!');
  res.send('<h1><em>This is home Page<em></h1>');
})

app.get('*', (req, res)=>{
    // res.send('Invalid Page!');
    res.redirect('/')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})