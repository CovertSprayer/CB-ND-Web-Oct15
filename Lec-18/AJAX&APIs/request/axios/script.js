const btn = document.querySelector('button');
const list = document.querySelector('.list');

btn.addEventListener('click', () => {
    fetchData();
})

const api = 'https://dummyjson.com/products';

// async function fetchData() {
    // const res = await fetch(api);
    // const data = await res.json();
    // showData(data);
// }

async function fetchData(){
    try {
        const res = await axios.get(api);
        showData(res.data);
    } 
    catch (err) {
        console.log(err);
    }
}

function showData(data) {
    console.log(data);
    list.innerHTML = '';
    data.products.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item.title;
        list.append(li);
    });
}
