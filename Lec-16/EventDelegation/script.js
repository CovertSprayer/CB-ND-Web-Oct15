const elements = document.querySelectorAll('.el');
const parent = document.querySelector('.container');

// for(let element of elements){
//     element.addEventListener('click', (e)=>{
//         console.log(e.target.innerText);
//     })
// }

parent.addEventListener('click', (e)=>{

    if(e.target.classList.contains('el')){
        console.log(e.target.innerText);
    }


})