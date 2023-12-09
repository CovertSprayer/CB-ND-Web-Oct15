function download(url){
    console.log('File started to download!!');
    setTimeout(()=>{
        let profile = url.split('/').pop();
        // compress(profile)
        upload(profile);
    }, 3000)
}

// function compress(file){
//     console.log('File started to compress');
//     setTimeout(() => {
//         let compressedFile = file.split('.')[0] + '.zip';
//         upload(compressedFile);
//     }, 2000);
// }

function upload(file, cb){
    console.log('File started to upload');
    setTimeout(() => {
        let serverUrl = 'http://facebook.cloud.com'
        return serverUrl;
    }, 1000);
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

download(url);
