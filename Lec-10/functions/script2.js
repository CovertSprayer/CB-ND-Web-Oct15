
function getMovie(movieName){

    function thor(){
        console.log('Inside thor fun');
        // return 20;
    }

    function avengers(){
        console.log('Inside Avengers Fun');
    }

    if(movieName.toLowerCase() === 'thor'){
        return thor;
    }
    else if(movieName.toLowerCase() === 'avengers'){
        return avengers;
    }
    else{
        // return function(){
        //     console.log('Movie not found!!');
        // }

        return () => console.log('Movie not found!!');
    }

}

var fun = getMovie('thor');
fun();
// console.log(fun()); 


