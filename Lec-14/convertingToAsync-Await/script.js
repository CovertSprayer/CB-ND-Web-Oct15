function download(url){
    return new Promise((resolve, reject) => {
        console.log('File started to download!!');
        setTimeout(()=>{
            let profile = url.split('/').pop();
            resolve(profile);
        }, 3000)
    })
}

function compress(file){
    return new Promise((resolve, reject) => {
        console.log('File started to compress');
        setTimeout(() => {
            let compressedFile = file.split('.')[0] + '.zip';
            resolve(compressedFile);
        }, 2000);
    })
}

function upload(file){
    return new Promise((resolve, reject) => {
        console.log('File started to upload');
        setTimeout(() => {
            let serverUrl = 'http://facebook.cloud.com'
            resolve(serverUrl);
        }, 1000);
    })
}

const url = 'http://facebook.com/profile.jpg';

async function main(){
    const downloadFile = await download(url);
    console.log('file downloaded successfully!');

    const compressedFile = await compress(downloadFile);
    console.log('file compressed successfully!');

    const serverURL = await upload(compressedFile);
    console.log('File uploaded successsfully to ', serverURL);
}

// main();

// fetch('https://dummyjson.com/products')
//     .then((response)=>{
//         console.log(response);
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => console.log(err));

async function getData(){
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    console.log(data);
}

getData();


