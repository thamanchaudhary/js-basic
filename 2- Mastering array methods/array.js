/**Array Methods
 * 1. toString() - Converts an array to a string, and returns the result.
 * 2. join() - Joins all elements of an array into a string.
 * 3. pop() - Removes the last element of an array, and returns that element.
 * 4. push() - Adds new elements to the end of an array, and returns the new length.
 * 5. shift() - Removes the first element of an array, and returns that element.
 * 6. unshift() - Adds new elements to the beginning of an array, and returns the new length.
 * 7. splice() - Adds/Removes elements from an array.
 * 8. concat() - Joins two or more arrays, and returns a copy of the joined arrays.
 * 9. slice() - Selects a part of an array, and returns the new array.
 * 10. sort() - Sorts the elements of an array.
 * 11. reverse() - Reverses the order of the elements in an array.
 * 12. indexOf() - Search the array for an element and returns its position.
 * 13. lastIndexOf() - Search the array for an element, starting at the end, and returns its position.
 * 14. forEach() - Calls a function for each array element.
 * 15. map() - Creates a new array with the result of calling a function for each array element.
 * 16. filter() - Creates a new array with every element in an array that pass a test.
 * 17. every() - Checks if every element in an array pass a test.
 * 18. some() - Checks if any of the elements in an array pass a test.
 * 19. reduce() - Reduce the values of an array to a single value (going left-to-right).
 * 20. reduceRight() - Reduce the values of an array to a single value (going right-to-left).
 * 21. includes() - Check if an array contains the specified element.
 * 22. find() - Returns the value of the first element in an array that pass a test.
 * 23. findIndex() - Returns the index of the first element in an array that pass a test.
 * 24. keys() - Returns a Array Iteration Object, containing the keys of the original array.
 * 25. values() - Returns a Array Iteration Object, containing the values of the original array.
 * 26. entries() - Returns a Array Iteration Object, containing key/value pairs of the original array.
 * 27. from() - Creates an array from an object.
 * 28. of() - Creates an array from the arguments passed to it.
 */

// 1. toString() - Converts an array to a string, and returns the result.
//array.toString()  //Syntax
let bikes = ["yamaha", "Bajaj", "Honda", "TVS", "Hero"];
console.log(bikes.toString());

// 2. join() - Joins all elements of an array into a string.
//array.join(separator)  //Syntax
let bikes1 = ["yamaha", "Bajaj", "Honda", "TVS", "Hero"];
console.log(bikes1.join(" - "));
//Expected output: yamaha - Bajaj - Honda - TVS - Hero
console.log(bikes1.join(" * "));
//Expected output: yamaha * Bajaj * Honda * TVS * Hero
console.log(bikes1.join(" "));
//Expected output: yamaha Bajaj Honda TVS Hero

