firstName = 'Rahul';
lastName = 'Dravid';

// str = `I'm Shreyance. "Wohooo!"`;
// console.log(str);
// console.log('My name is', firstName, lastName);
// console.log(`My name is ${firstName} ${lastName}`);

str = 'this is SOME random text';
str2 = 'hello' + ' ' + 'world';
console.log(str);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.includes('some'));
// console.log(str.replace('i', 'I'))
console.log(str.replaceAll(' ', '.'));

randomStr = '          hello          ';
console.log(randomStr);
console.log(randomStr.trimEnd())
console.log(randomStr.trimStart())
console.log(randomStr.trim())
// console.log(str.split(' '))

photo = 'profile.jpeg';
formats = ['png', 'jpeg', 'jpg'];

photoFormat = photo.split('.').pop();
// if(formats.includes(photoFormat)){
//     console.log(photo);
// }
// else{
//     console.log('Not a valid photo!!');
// }

if(formats.indexOf(photoFormat) === -1) 
    console.log('Not a valid photo!!');
else
    console.log(photo);

