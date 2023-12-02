console.log(1);

delay(3);

console.log(2);


function delay(n){
    let currTime = new Date().getTime();

    while(currTime + n*1000 > new Date().getTime()){
        
    }
}