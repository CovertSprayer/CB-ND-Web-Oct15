
// let randomNum

// -------------- creating a promise
let p = new Promise((res, rej)=>{
    setTimeout(() => {
        let num = Math.floor(Math.random()*10);

        if(num < 5){
            res(num);
        }
        else rej('Sorry, Number is greater than 5');
    }, 4000);
})

// ---------------- consuming a promise

p.then((num)=>{
    console.log(num);
    console.log(num*10)
}).catch((err)=>{
    console.log(err);
})