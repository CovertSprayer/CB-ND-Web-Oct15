
// function outerFun(){
//     var a = 10;
//     function innerFun(){
//         // a++;
//         a = a + 1;
//         console.log(a);
//     }
//     return innerFun;
// }

// var temp1 = outerFun();
// var temp2 = outerFun();
// temp1();
// temp2();
// temp2();
// temp1();

function outerFun(){
    var a = 10;
    function innerFun(){
        var b = 20;
        a++;
        function innerMost(){
            a++;
            b++;
            console.log(a, b);
        }
        return innerMost;
    }
    return innerFun;
}

var temp = outerFun();
var fun1 = temp();
var fun2 = temp();

fun1();
fun2();
fun2();
fun1();
fun2();

