// //1. Write a JavaScript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100

// const hundred = (num1,num2) => (num1 === 100 || num2 ===100 || num1+num2 === 100)
// const result = hundred(50,50);
// console.log(result);

// // 2.Write a JavaScript exercise to get the extension of a filename.
// const getExtension = (str) => str.slice(str.lastIndexOf('.'));
// console.log(getExtension('get.html'));

// // 3.Write a JavaScript program to replace every character in a given string with the character following it in the alphabet
// const replaceWithNext = (str) => str.split('').map((char, i, arr) => arr[i + 1] || "").join('');
// console.log(replaceWithNext("driver"))

// //4.Write a JavaScript program to get the current date. Expected Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
// const getCurrDate = (date = new Date()) => {
//     const month = date.getMonth();
//     const day = date.getDate();
//     const year = date.getFullYear();
//     return `${month}/${day}/${year}`;
// }
// console.log(getCurrDate());

// //5.Write a JavaScript program to create a new string adding "New!" in front of a given string. If the given string begins with "New!" already then return the original string
// const AddNew = (str) => {
//     let word = "New!"
//     if(str.indexOf("New!")!== 0){
//         word = word + str;
//         return word;
//     }
//     return str;
// }

// console.log(AddNew(" shoe"));

// //   6. write a func to convert this to
//  const obj = {
//     a: 1,
//     b: {
//       c: 2
//     },
//     c: {
//       d: {
//         e: {
//           f: 3
//         }
//       }
//     }
//   };

// // this
// const obj = {
//     a: 1,
//     'b.c': 2,
//     'c.d.e.f': 3
//   };

// function flattenObject(obj, parentKey = "", result = {}) {
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       const newKey = parentKey ? `${parentKey}.${key}` : key;
//       if (
//         typeof obj[key] === "object" &&
//         obj[key] !== null &&
//         !Array.isArray(obj[key])
//       ) {
//         flattenObject(obj[key], newKey, result);
//       } else {
//         result[newKey] = obj[key];
//       }
//     }
//   }
//   return result;
// }

// // Example usage
// const nestedObj = {
//   a: 1,
//   b: {
//     c: 2,
//   },
//   c: {
//     d: {
//       e: {
//         f: 3,
//       },
//     },
//   },
// };

// const result = flattenObject(nestedObj);
// console.log(result);

// // reverse an array

// let array = [1, 2, 3, 4];
// let rev = [];

// for (let i = array.length - 1; i >= 0; i--) {
//   rev.push(array[i]);
// }

// console.log(rev);

// // 7. isomorphic Given two strings s and t, determine if they are isomorphic.

// function iso(str1, str2) {
//   const map1 = {};
//   const map2 = {};

//   if (str1.length !== str2.length) {
//     return "rejected";
//   }

//   for (let i = 0; i <= str1.length; i++) {
//     let char1 = str1[i];
//     let char2 = str2[i];

//     if (map1[char1] === undefined) {
//       map1[char1] = char2;
//     } else {
//       if (map1[char1] !== char2) {
//         return "rejected";
//       }
//     }
//     if (map2[char2] === undefined) {
//       map2[char2] = char1;
//     } else {
//       if (map2[char2] !== char1) {
//         return "rejected";
//       }
//     }
//   }
//   return "accepted";
// }

// console.log(iso("badc", "baba"));

////8.  Find All Possible Recipes from Given Supplies
////Example 1:
//// Input: recipes = ["bread"], ingredients = [["yeast","flour"]], supplies = ["yeast","flour","corn"]
//// Output: ["bread"]
//// Explanation:
//// We can create "bread" since we have the ingredients "yeast" and "flour".

//// Example 2:
// //Input: recipes = ["bread","sandwich"], ingredients = [["yeast","flour"],["bread","meat"]], supplies = ["yeast","flour","meat"]
// //Output: ["bread","sandwich"]
// //Explanation:
// //We can create "bread" since we have the ingredients "yeast" and "flour".
// //We can create "sandwich" since we have the ingredient "meat" and can create the ingredient "bread".

// let findAllRecipes = function (recipes, ingredients, supplies) {
//   let result = [];

//   let canMakeRecipe = (recipeIndex) => {
//     for (let i = 0; i < ingredients[recipeIndex].length; i++) {
//       if (!supplies.includes(ingredients[recipeIndex][i])) {
//         return false;
//       }
//     }
//     return true;
//   };

//   let recipesLength;
//   do {
//     recipesLength = result.length;

//     recipes.forEach((recipe, index) => {
//       if (!result.includes(recipe) && canMakeRecipe(index)) {
//         result.push(recipe);
//         supplies.push(recipe);
//       }
//     });
//   } while (result.length > recipesLength);

//   return result;
// };

// let recipes = ["bread", "sandwich"],
//   ingredients = [
//     ["yeast", "flour"],
//     ["bread", "meat"],
//   ],
//   supplies = ["yeast", "flour", "meat"];
// let answer = findAllRecipes(recipes, ingredients, supplies);
// console.log(answer);

//Given an array of strings strs, group the anagrams together. You can return the answer in any order.An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
//Example 1:
//Input: strs = ["eat","tea","tan","ate","nat","bat"]
//Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

const anagrams = (strs) => {
  const output = [];
  for (let i = 0; i <= strs.length - 1; i++) {
    if (!output.includes(strs[i])) {
      let word = strs[i];
      output[i][0] = word;
      for (let j = i + 1; j <= strs.length - 2 - i; j++) {
        let inc = 1;
        if (word.length === strs[i].length) {
          for (let z = 0; z <= word.length - 1; z++) {
            if (!str[j].includes(word[z])) {
              break;
            }
            output[i][inc];
            inc++;
          }
        }
      }
    }
  }
};

const result = anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(result);
