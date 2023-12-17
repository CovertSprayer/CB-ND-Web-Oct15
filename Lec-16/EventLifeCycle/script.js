
const grandParent = document.querySelector('.grand-parent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')


// 1) capturing phase --> capture value (true or false, bydefault it's false)
// 2) event phase (e.target)
// 3) bubbling phase


// grandParent.addEventListener('click', ()=>{
//     console.log('Grand Parent div clicked!')
// }, true)

// parent.addEventListener('click', ()=>{
//     console.log('Parent div clicked!')
// }, false)

// child.addEventListener('click', ()=>{
//     console.log('child div clicked!')
// }, false)

grandParent.addEventListener('click', ()=>{
    console.log('Grand Parent div clicked!')
})

parent.addEventListener('click', ()=>{
    console.log('Parent div clicked!')
})

child.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log('child div clicked!')
})