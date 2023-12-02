const id = setInterval(() => {
    console.log('Hello')
}, 2000);

setTimeout(() => {
    clearInterval(id);
}, 10000);