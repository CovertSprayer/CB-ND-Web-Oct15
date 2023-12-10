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
// download(url, function(downloadFile){
//     console.log('File downloaded successfully', downloadFile);
//     compress(downloadFile, function(compressedFile){
//         console.log('File compress successfully to', compressedFile)
//         upload(compressedFile, function(serverUrl){
//             console.log('File uploaded successfully at ', serverUrl);   
//         })
//     })
// })

// download(url)
//     .then((downloadedFile)=>{
//         console.log('File downloaded successfully!!');
//         compress(downloadedFile)
//             .then((compressedFile)=>{
//                 console.log('File compressed to', compressedFile);
//                 upload(compressedFile)
//                     .then((serverUrl)=>{
//                         console.log('File uploaded to ', serverUrl)
//                     })
//             })
//     })
//     .catch(err => console.log(err));

download(url)
    .then(downloadedFile => {
        console.log('File donwloaded successfully!');
        return compress(downloadedFile)
    })
    .then(compressedFile => {
        console.log('File compressed to ', compressedFile);
        return upload(compressedFile);
    })
    .then(serverURL => {
        console.log('File uploaded successfully to', serverURL)
    })
    .catch(err => console.log(err));

// download(url)
//     .then(compress)
//     .then(upload)
//     .catch(err => console.log(err));
