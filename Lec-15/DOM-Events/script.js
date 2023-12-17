const h1 = document.querySelector('h1');
h1.style.border = '2px solid black';

// h1.onclick = function(){
//     console.log('clicked');
// }

// h1.onclick = function(){
//     console.log('clicked again');
// }

h1.addEventListener('click', function(){
    console.log('clicked!!');
})

h1.addEventListener('click', function(){
    console.log('clicked again');
})

h1.addEventListener('dblclick', (e)=>{
    console.log('Doubled Clicked')
    console.log(e.target)
})

h1.addEventListener('mouseenter', ()=>{
    h1.style.background = 'lightgreen';
})

h1.addEventListener('mouseleave', ()=>{
    h1.style.background = '';
})

const inp = document.querySelector('input');
inp.addEventListener('keydown', (e)=>{
    // console.log(e.target);
    console.log('key down!');
    // console.log(e);
    
})

inp.addEventListener('keyup', (e)=>{
    console.log('key up!');
})



console.log(h1);