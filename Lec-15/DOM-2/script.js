const h1 = document.querySelector('h1');
h1.innerText = 'Hello from JS'
// h1.innerText = '<i>Hello from JS</i>'
h1.innerHTML = '<i>Hello from JS</i>'

// console.log(h1.innerText);
// console.log(h1.innerHTML);

const inp = document.querySelectorAll('input')[1];
console.log(inp);
console.log(inp.hasAttribute('type'));
console.log(inp.getAttribute('type'));
inp.setAttribute('type', 'password');

console.log(h1.classList.contains('one'))
// console.log(h1.classList.add('three'));
// console.log(h1.classList.add('two'));
console.log(h1.classList.add('three' , 'two'));
console.log(h1.classList.remove('two'));
h1.classList.toggle('three');

// setInterval(()=>{
//     h1.classList.toggle('three');
// }, 1000)

const ol = document.createElement('ol')
const li = document.createElement('li');
li.innerText = 'The Tiger King';
console.log(li)
ol.appendChild(li);
console.log(ol)
ol.append('hello')

h1.after(ol);