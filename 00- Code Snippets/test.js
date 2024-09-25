// setTimeout and setInterval are both functions that are used to delay the execution of a function.

// setTimeout
/*
 - Executes a functio  once after a specified delay.
 - setTimeout(function, delay);
 */

// Example
setTimeout(() => {
  console.log("This message is shown after 3 seconds");
}, 3000);
// Output: This message is shown after 3 seconds

// setInterval
/*
 - Executes a function, over and over again, at specified intervals.
 - setInterval(function, interval);
 */

// Example
setInterval(() => {
  console.log("This message is shown every 3 seconds");
}, 3000);
// Output: This message is shown every 3 seconds
