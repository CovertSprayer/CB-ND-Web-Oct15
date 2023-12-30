const inp = document.querySelector('input');
const form = document.querySelector('form');
const list = document.querySelector('.list');

form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const query = inp.value;
    inp.value = "";
    const data = await getData(query);
    list.innerHTML = '';
    addToList(data);
})

// 
async function getData(query){
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    const data = await res.json();
    return data;
}

function addToList(data){
    console.log(data);
    data.forEach(item => {
        const imageURL = item.show.image.medium;
        const img = document.createElement('img');
        img.setAttribute('src', imageURL);
        img.setAttribute('width', '200px')
        list.append(img);
    });
}


const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');

leftArrow.addEventListener('click', (e)=>{
    // console.log(window.scrollX)
    // list.scrollIntoView({})
    list.scrollBy({right:210, behavior:"smooth"});

})

rightArrow.addEventListener('click', (e)=>{
    // list.scrollIntoView({left:0, behavior:"smooth"})
    list.scrollBy({left:210, behavior:"smooth"});
})

