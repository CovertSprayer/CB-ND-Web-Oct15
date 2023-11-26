arr = [1,2,3,4,5,6];
console.log(arr);
// console.log(arr.length);

// ------------------ push, pop
// len = arr.push(500);
// console.log(arr, len);

// lastVal = arr.pop();
// console.log(arr, lastVal);

// ----------------- unshift, shift
// arr.unshift(100);
// arr.shift();
// arr.shift();

// arr[10] = 'hello';

// -------------------- splice(starting index, no of items, item to be added)
// arr.splice(2,1);
// arr.splice(2,3);
// arr.splice(2);

// arr.splice(2, 1, 40);
// arr.splice(2, 0, 40);
// arr.splice(2, 3, 40, 50, 60);

// ===============================
arr1 = [1,2,3,4];
arr2 = [5,6,7,8];
temp = ['a', 'b', 'c']
arr3 = arr1.concat(arr2);
arr3_Temp = arr1.concat(arr2, temp);
arr4 = arr2.concat(arr1);

// -------------------- indexOf()
console.log(arr1.indexOf(3));
// console.log(arr1.indexOf(13));

// ------------------------ contains
console.log(arr1.includes(3));

// -------------------------- slice(starting index, last index + 1);
// console.log(arr3.slice(2,5+1))


console.log(arr3);
console.log(arr4);