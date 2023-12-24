const btn = document.querySelector('button');
const list = document.querySelector('.list');

btn.addEventListener('click', () => {
    fetchData();
})

const api = 'https://dummyjson.com/products';

function fetchData() {
    fetch(api, { method: "get" })
        .then((res) => {
            console.log(res);
            return res.json();
        })
        .then((data) => {
            console.log(data);
            showData(data);
        })
        .catch(err => console.log(err));
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
