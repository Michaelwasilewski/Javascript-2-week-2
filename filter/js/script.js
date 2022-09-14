// const values = [100, 200, 300, 400, 500];
// const newArray = values.filter((element, index, array) =>
// {
// // Return true if you want to keep the item in the array being returned
//   // Return false if you don't want the item to be included in the
//   //array being returned
// });

const numbers = [3, 4, 20, 55];
// const filteredNumbers = numbers.filter((number) => {
//   // return to me in the new array numbers greater than or equall 4.
//   if (number >= 4) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(filteredNumbers);

// cleaner code.
// const filteredNumbers = numbers.filter((number) => number >= 4);
// console.log(filteredNumbers);

// const values = [0, 23, 55, 66, 777, 100, 500, 250];
// const filteredValues = values.filter((number) => number >= 100);
// console.log(filteredValues);

// function filterValues(array){
// const filteredValues = array.filter((item)=> {
//     if(item >= 100){
//         return true;
//     } else {
//         false;
//     }
// })
// return filterValues;
// };
// const myFilterValues = filterValues(values);
// filterValues();

// example 3
const people = [
  { name: "Kari", age: 28 },
  { name: "Astrid", age: 32 },
  { name: "Hans", age: 22 },
  { name: "Inger", age: 19 },
  { name: "Liv", age: 42 },
  { name: "Kristoffer", age: 12 },
  { name: "Anne", age: 12 },
  { name: "Martin", age: 17 },
  { name: "Joakim", age: 45 },
  { name: "Ellen", age: 7 },
];
const filteredPeople = people.filter(({ age }) => age >= 22);
console.log(filteredPeople);

// Filter a list of games that have multiplayer and the rating of 8 and higher
const games = [
  { title: "Mayhem Fighter", isMultiplayer: true, rating: 8 },
  { title: "Build-a-farm", isMultiplayer: true, rating: 9 },
  { title: "Ghost Story", isMultiplayer: false, rating: 8 },
  { title: "Fast Car Racer", isMultiplayer: true, rating: 7 },
  { title: "Elf and Dwarf RPG", isMultiplayer: false, rating: 8 },
];

  const filteredGames = games.filter (({rating, isMultiplayer}) => (isMultiplayer === true) && (rating >= 8));
  console.log(filteredGames);
// const filteredGames = games.filter(
//   (games) => games.isMultiplayer === true && games.rating >= 8
// );
// console.log(filteredGames);
