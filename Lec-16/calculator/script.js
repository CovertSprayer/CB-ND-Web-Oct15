const buttons = document.querySelectorAll('td');
const inp = document.querySelector('input');
// console.log(buttons);

buttons.forEach(button => {
    button.addEventListener('click', (e)=>{
        try{
            const text = e.target.innerText;
            if(text === '='){
                const result = eval(inp.value);
                inp.value = result;
            }
            else if(text === 'C'){
                inp.value = ''
            }
            else if(text === 'x'){
                inp.value += '*';
            }
            else{
                inp.value += text;
            }
        }
        catch(err){
            inp.value = 'Invalid Operator!!'
            console.log(err);
        }
    })
})