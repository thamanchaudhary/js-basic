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
