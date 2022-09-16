// const values = [0, 1, 2, 3, 4];

// const result = values
//   .filter(/* This filter first runs */)
//   .reduce(/* This reduce acts on the result of the filter */)
//   .map(/* This map acts on the result of the reduce above */);

//   Practical example 1: Calculating discount for products in stock
//   In this example, we have a list of products that we want to 
//   apply a discount to for a sale, but only products where: 
//   the price is 5 or higher (>= 5)
//   the products are in stock (inStock === true)
//   We then need to store this discounted amount
//   so it can be displayed at a later stage.
//   We can do this in a two step process with chaining:
//   filter the products that are equal to or above 5 as well as being in stock
//   map out the filtered products while performing a 
//   calculation to get the discount and storing it as a value (discountedPrice).
//   NOTE: The formula for calculating the discounted price is:
//   discount = price - (discount percentage / 100) * price
const DISCOUNT_PERCENTAGE = 20;

const products = [
  { name: 'Milk', price: 5.0, inStock: true },
  { name: 'Cheese', price: 10.0, inStock: true },
  { name: 'Bread', price: 8.0, inStock: false },
  { name: 'Beans', price: 3.0, inStock: true },
  { name: 'Eggs', price: 12.0, inStock: true },
  { name: 'Rice', price: 4.0, inStock: false },
  { name: 'Meat', price: 25, inStock: true },
  { name: 'Coffee', price: 12.0, inStock: true },
  { name: 'Tea', price: 8.0, inStock: false },
  { name: 'Bottled Water', price: 4.0, inStock: false },
];

const discountedProducts = products
.filter ((product)=> {
    if (product.inStock === true && product.price >= 5) {
        return true;
    }
})
.map((product) => {
    product.discountedPrice =
        product.price - (DISCOUNT_PERCENTAGE / 100) * product.price;
        return product;
});
console.log(discountedProducts);