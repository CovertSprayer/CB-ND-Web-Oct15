function temp(){
    console.log(a)
    console.log('Inside temp fun');
    c();

    var b = 20;
    function c(){
        console.log(b);
    }
}

console.log(a);
var a = 10;
temp();