// //1. Write a JavaScript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100

// const hundred = (num1,num2) => (num1 === 100 || num2 ===100 || num1+num2 === 100)
// const result = hundred(50,50);
// console.log(result);


// // 2.Write a JavaScript exercise to get the extension of a filename.
// const getExtension = (str) => str.slice(str.lastIndexOf('.'));
// console.log(getExtension('get.html'));


// 3.Write a JavaScript program to replace every character in a given string with the character following it in the alphabet
const replaceWithNext = (str) => str.split('').map((char,i,arr)=> arr[i+1] || "").join('');


console.log(replaceWithNext("driver"))