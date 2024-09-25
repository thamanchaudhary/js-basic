// The length property returns the length of a string (number of characters).
//LENGTH
const str = "Hello Thaman Tharu";
str.length;
console.log(str.length); // 18

// slice() extracta a part of the string and returns the extracted part in a new string.
//SLICE
const strExample = "Hello Thaman Tharu";
sliceStr = strExample.slice(5, 12);
// console.log(strExample.slice(, 12)); // Thaman
console.log(sliceStr); // llo Thaman

//the replace() method replaces a specified value with another value in a string.
//REPLACE
const strReplace = "Hello Thaman Tharu";
replaceStr = strReplace.replace("Thaman", "Hari");
console.log(replaceStr); // Hello Ram Tharu

//This methods converts a string to uppercase or lowercase.
//UPPERCASE & LOWERCASE
const strUpperCase = "Hello Thaman Tharu";
upperStr = strUpperCase.toUpperCase();
console.log(upperStr); // HELLO THAMAN THARU
strLowerCase = "Hello Thaman Tharu";
lowerStr = strLowerCase.toLowerCase();
console.log(lowerStr); // hello thaman tharu

//The concat() method is used to join two or more strings.
//CONCAT
const strConcat = "Hello";
const strConcat2 = "Thaman Tharu";
concatStr = strConcat.concat(" ", strConcat2);
console.log(concatStr); // Hello Thaman Tharu

// The trim() method removes whitespace from both sides of a string.
//TRIM
const strTrim = "   Hello Thaman Trim  ";
trimStr = strTrim.trim();
console.log(trimStr); // Hello Thaman Trim

//The charAt() method returns the character at a specified index (position) in a string.
//CHARAT
const strCharAt = "Hello Thaman Tharu";
charAtStr = strCharAt.charAt(6);
console.log(charAtStr); // T

//The split() method converts a string into an array of substrings, and returns the new array.
//SPLIT
const strSplit = "Hello Thaman Tharu";
splitStr = strSplit.split(" ");
console.log(splitStr); // [ 'Hello', 'Thaman', 'Tharu' ]

//  SPLICE METHOD
// The splice() method adds/removes items to/from an array, and returns the removed item(s).

// Syntax

let fruits = ["Banana", "Orange", "Apple", "Mango"];
let splicedFruits = fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(splicedFruits); // []
console.log(fruits); // [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]

/********************
 Helper Functions Example
 ********************/

function randomExample(min, max) {
  return Math.random() * (max - min) + min;
}

let = randNumber = randomExample(1, 9);
console.log(randNumber);

//digit to word conversion
// function digitToWord(digit) {
//   switch (digit) {
//     case 0:
//       return "Zero";
//     case 1:
//       return "One";
//     case 2:
//       return "Two";
//     case 3:
//       return "Three";
//     case 4:
//       return "Four";
//     case 5:
//       return "Five";
//     case 6:
//       return "Six";
//     case 7:
//       return "Seven";
//     case 8:
//       return "Eight";
//     case 9:
//       return "Nine";
//     default:
//       return "Not a digit!";
//   }
// }

//get getUnicodeNumber number
function getUnicodeNumber(input) {
  const standardNumsets = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const nepaliNumsets = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
  let result = str.replace(standardNumsets, nepaliNumsets, input);
  return result;
}

//Example
let unicodeNumber = getUnicodeNumber(5);
console.log(unicodeNumber);


