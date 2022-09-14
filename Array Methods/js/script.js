// const arrayValues = [5, 7, 9, 14];
// // new array called 'newArray' that
// // contains the result from the `.map` method

// const newArray = arrayValues.map(/* Code here */)

// callback functions                 ^

// how to use the annonymous function  (mostly used)
// seperate named function.

// const values = [100, 200, 400, 600];

// const newValues = values.map(function (element, index, array) {
//   // modify and return element here
//   return element;
// });
// console.log(newValues);

// const newerValues = values.map((element, index, array) => {
//     // modify and return element here
//     return element;
//   });
//   console.log(newerValues);

// 2. Seperate callback function 


const values = [100, 200, 300, 400];
function callbackFn(element, index, array) {
    // modify and return element here
}
const newArray = values.map(callbackFn);
