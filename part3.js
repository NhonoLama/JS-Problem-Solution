// //Write a JavaScript program to find the even digits in a an array of integers
// const evendigits = (arr) =>{
//     return arr.filter(i=> (i%2 == 0))
// }

// const even = evendigits([5,2,4,7,12,57,8,0]);
// console.log(even);

// //Write a JavaScript program to find the number of even values up to a given number
// const evenNums = (num,flag=0) => {
//     if(num%2 == 0){flag++}
//     if(num>1){
//         return evenNums(num-1,flag);
//     }
//     return flag;
// }

// console.log(evenNums(10));

// //Write a JavaScript program to check whether a given array of integers is sorted in ascending order.
// const isSorted = (num) => {
//   for(let i = 0 ; i<num.length ; i++){
//     if(num[i]>num[i+1]){
//         return false;
//     }
//   }
//   return true;
// }

// console.log(isSorted([2,3,4,6,8,9,11]));
// console.log(isSorted([2,3,4,6,5,0,1]));


// //Write a JavaScript program to get the largest even number from an array of integers.
// const largeEven = (num) =>{
//     evenNums = num.filter(i=> (i%2 == 0));
//     if(evenNums == null){ return "no even numbers!!"}
//     largest = 0;
//     for(const num of evenNums){
//         if(num>largest){
//             largest = num;
//         }
//     }
//     return largest;
// }

// console.log(largeEven([2,4,6,5,7,9,23]))

//Write a JavaScript program to replace the first digit in a string (should contain at least one digit) with a $ character.
