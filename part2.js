//1.Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back.
// The string length must be 3 or more, if not, the original string is returned.
const newStr = (str)=> {
    if (str.length >= 3){
        const substr= str.slice(-3);
        return (substr + str + substr);
    }
    return str;
}
console.log(newStr("lastthe"));


//2.Write a JavaScript program to extract the first half of a string of even length.
const firstHalf = (str) => {
    if((str.length%2) === 0){
        const half = str.slice(0,str.length/2)
        return half
    }
    return "Not a even string"
}
console.log(firstHalf("momo"));


//3.Write a JavaScript program to concatenate two strings except their first character.
const concate2 = (str1, str2) => {
    str1 = str1.slice(1);
    str2 = str2.slice(1);
    return (str1 +" "+ str2)
}
console.log(concate2("hhey","yyou"));


//4.Given two values, write a JavaScript program to find out which one is nearest to 100
const near100 = (num1,num2)=>{
    const c1 = 100 - num1;
    const c2 = 100 - num2;
    return (c1<c2?num1:num2);
}
console.log(near100(90,99));


//5.Write a JavaScript program to check a given string contains 2 to 4 occurrences of a specified character.

