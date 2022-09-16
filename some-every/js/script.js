// const values = [100, 200, 300, 400, 500];

// const newArray = values.some((element, index, array) => {
//   // Return true if it matches your condition. If it does, it will stop iterating and return true for the result of the array
//   // Return false if the condition is not matched
// });


// const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const didMathCondition = values.some((value, index)=> {
//     console.log({index, value});
//     if (value >= 3) {
//         return true;
//     }
// });
// console.log('DidMatchCondition:', didMathCondition);

const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const DidMatchCondition = values.some((value, index)=> {
    console.log({index, value});
    if(value >= 100) {
        return true;
    }
});
console.log("didMatchCondition:", DidMatchCondition);