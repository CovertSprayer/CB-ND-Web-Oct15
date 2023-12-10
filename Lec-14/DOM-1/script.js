const heading = document.getElementsByTagName('h1')[0];
heading.style.color = 'red';

const paras = document.getElementsByTagName('p');
console.log(paras);

for(let para of paras){
    para.style.color = 'Blue';
    para.style.border = '2px solid blue'
    para.style.backgroundColor = 'yellow';
}


const favFruits = document.getElementsByClassName('fav-fruit');
console.log(favFruits);

const specialPara = document.getElementById('special');
console.log(specialPara);
specialPara.style.textDecoration = 'line-through';

const usernameInput = document.getElementsByName('username')[0];
console.log(usernameInput);
usernameInput.style.padding = '20px'

const special_para = document.querySelector('#special');
console.log(special_para);

const fruits = document.querySelectorAll('.fav-fruit');
console.log(fruits);

const span = document.querySelector('div p span');
console.log(span);
span.style.color = 'red';
// span.style.display = 'none';

const p = document.querySelectorAll('p');
console.log(p);

