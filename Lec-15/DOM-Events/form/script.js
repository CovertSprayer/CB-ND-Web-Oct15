const form = document.querySelector('form');
const usernameInp = document.querySelectorAll('input')[0];
const passwordInp = document.querySelectorAll('input')[1];

//---------------------------
// document.addEventListener('scroll', ()=>{
//     console.log(window.scrollY);
// })

//----------------------------


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    // console.log(usernameInp.getBoundingClientRect());
    const username = usernameInp.value;
    const password = passwordInp.value;

    usernameInp.value = '';
    passwordInp.value = '';

    console.log(username);
    console.log(password);
})



