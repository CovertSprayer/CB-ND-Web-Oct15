$('button').on('click', ()=>{
    console.log('clicked!!');
})

console.log($('h1'))
const h1 = document.querySelector('h1');
$(h1).css('color', 'blue')

$('h1').on('click', function(e){
    console.log(e.target);
    // e.target.style.color = 'red';
    $(e.target).css('color', 'red'); //$(this)
})