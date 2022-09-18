// const values = [0, 1, 2, 3, 4];

// const result = values
//   .filter(/* This filter first runs */)
//   .reduce(/* This reduce acts on the result of the filter */)
//   .map(/* This map acts on the result of the reduce above */);

// //   Practical example 1: Calculating discount for products in stock
// //   In this example, we have a list of products that we want to
// //   apply a discount to for a sale, but only products where:
// //   the price is 5 or higher (>= 5)
// //   the products are in stock (inStock === true)
// //   We then need to store this discounted amount
// //   so it can be displayed at a later stage.
// //   We can do this in a two step process with chaining:
// //   filter the products that are equal to or above 5 as well as being in stock
// //   map out the filtered products while performing a
// //   calculation to get the discount and storing it as a value (discountedPrice).
// //   NOTE: The formula for calculating the discounted price is:
// //   discount = price - (discount percentage / 100) * price

// const products = [

//     // Here we create an object and each
//     // object has a name and a price
//     { name: 'dress', price: 600 },
//     { name: 'cream', price: 60 },
//     { name: 'book', price: 200 },
//     { name: 'bottle', price: 50 },
//     { name: 'bedsheet', price: 350 }
// ];

// const discounted_Price = 50;
// const filteredProducts = products.filter((product)=> product.price)
// .map((products)=> {
//     products.discounted_Price =
//     products.price - (discounted_Price / 100) * products.price;
//     return `The ${products.name} new price is now ${products.price / 2} DOLLA BILL YOO`;
// })
// console.log("filteredProducts",filteredProducts);

// example 2

// In this example, we have a list of products that
// we want to apply a discount to it for a sale, but only products where:
// 1. the price is 5 or higher (>= 5)
// 2. the products are in stock (inStock === true)
// use the map method to calculate a new property called discountedPrice
// to calculate the discount = price - (discount percentage / 100) * price
// discount percentage will be 20
// {name: 'Milk', price: 5, inStock: true, discountedPrice: 4}
const DISCOUNT_PERCENTAGE = 20;

const products = [
  { name: "Milk", price: 5.0, inStock: true },
  { name: "Cheese", price: 10.0, inStock: true },
  { name: "Bread", price: 8.0, inStock: false },
  { name: "Beans", price: 3.0, inStock: true },
  { name: "Eggs", price: 12.0, inStock: true },
  { name: "Rice", price: 4.0, inStock: false },
  { name: "Meat", price: 25, inStock: true },
  { name: "Coffee", price: 12.0, inStock: true },
  { name: "Tea", price: 8.0, inStock: false },
  { name: "Bottled Water", price: 4.0, inStock: false },
];

const discountedProducts = products
  .filter(({ price, inStock }) => price >= 5 && inStock === true)
  .map((product) => {
    product.discountedPrice = product.price * 0.8;
    return product;
  });
console.log(discountedProducts);

const students = [
    { name: 'Victoria', age: 19, isOnline: true, results: [80, 61, 66, 50, 91] },
    { name: 'Theo', age: 32, isOnline: false, results: [57, 99, 96, 72, 96] },
    { name: 'Markus', age: 54, isOnline: true, results: [50, 92, 70, 66, 90] },
    { name: 'Aksel', age: 21, isOnline: true, results: [77, 86, 70, 71, 75] },
    { name: 'Felix', age: 29, isOnline: false, results: [99, 76, 59, 74, 68] },
    { name: 'Benjamin', age: 48, isOnline: true, results: [65, 85, 74, 83, 54] },
    { name: 'Ulrik', age: 39, isOnline: true, results: [92, 72, 55, 69, 58] },
    { name: 'Alma', age: 28, isOnline: false, results: [92, 91, 66, 77, 71] },
    { name: 'July', age: 37, isOnline: true, results: [78, 70, 59, 76, 95] },
    { name: 'Leo', age: 42, isOnline: true, results: [55, 64, 88, 88, 95] },
  ];

  const result = students
  .filter((student)=> {
    if(student.age >= 30 && student.isOnline === true) {
        return true;
    }
  })
  .reduce((classAverage, student, index, studentsArray)=> {
    const studentsTOtalMarks = student.results.reduce(
        (studentAverage, result, index, resultsArray) => {
            studentAverage += result / resultsArray.length;
            return studentAverage;
        },
    0);
    classAverage += studentsTOtalMarks / studentsArray.length;
    return classAverage;
  }, 0);
  console.log(result);