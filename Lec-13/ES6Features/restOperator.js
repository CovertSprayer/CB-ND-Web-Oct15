// ...
data = [10,11,12,13]

function add(a, b, ...c){
    console.log(c);
    return a+b;
}

add(1,2,3,4,5,6);
// add(1,2, ...data)