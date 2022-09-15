const name = "Michael";
console.log(name);

const values = [2, 3, 5, 10, 20];
const sum = values.reduce((total, value)=> {
    total += value;
    return total;
}, 0);
console.log(sum);

const garage = [
    {
        cars: 10,
        mark: "BMW"
    },
    {
        cars: 20,
        mark:"Audi"
    },
    {
        cars: 40,
        mark: "opel"
    },
    {
        cars: 1,
        mark: "volkswagen"
    },
];

const carAmount = garage.reduce((total,garage)=>{
total += garage.cars;
return total;
},50);
console.log(carAmount);

const products = [
    { title: 'Cheese', inStock: false, quantity: 2, price: 15.0 },
    { title: 'Milk', inStock: true, quantity: 5, price: 8.99 },
    { title: 'Bread', inStock: true, quantity: 3, price: 22.0 },
    { title: 'Egg', inStock: true, quantity: 12, price: 5 },
  ];

  const totalCost = products.reduce((total, currentProduct)=> {
    if (currentProduct.inStock === true) {
        total += currentProduct.price * currentProduct.quantity;
    }
    return total;
  },0 )

  console.log(totalCost);

// const totalCost = products.reduce(
//     (total, currentProduct) =>
//     inStock ? (total += currentProduct.price * currentProduct.quantity) : total,
//     0,
// );
// console.log(totalCost);

