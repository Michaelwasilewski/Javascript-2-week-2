// const values = [100, 200, 300, 400, 500];

// const newArray = values.find((element, index, array) => {
//     // return true if u find the element you want
//     // return false if you havent found the element you want
// });
// example1
// const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const foundValue = values.find((currentValue, index)=> {
//     console.log('current index: ', index);
//     if (currentValue === 5){
//         return true;
//     }
// });

// console.log('found value: ', foundValue);

// example 2

const temperatures = [109.2, 115.2, 119.9, 120.8, 150.0, 175, 182];

const valueFound = temperatures.find((currentTemperature) => currentTemperature > 120);

console.log(valueFound);

// const users = [
//     { name: 'Kari', id: 19313 },
//     { name: 'Hans', id: 40202 },
//     { name: 'Joakim', id: 59230 },
//     { name: 'Inger', id: 14023 },
//     { name: 'Ellen', id: 76339 },
//   ];

//   const findUser = users.find((user) => {
//     if (user.name[0].toLowerCase()==='i') {
//         return true;
//     }
//   }); 
//   console.log(findUser);


  const profiles = [
    {
      name: "uzo",
      id: 234234,
    },
    {
      name: "Hesh",
      id: 78787,
    },
    {
      name: "emil",
      id: 777763,
    },
    {
      name: "clarks",
      id: 673254782365472,
    },
  ];

  const findUser = profiles.find((user) => {
    if (user.name[0].toLowerCase() === "h") {
      return true;
    }
  });
  console.log(findUser);
  // shorter version
  //  const findUser = profiles.find(({name}) => name[0].toLowerCase()==='h');  
  

  const books = [
    { title: 'Building a Spaceship', inStock: false },
    { title: 'Growing Orchids', inStock: false },
    { title: 'River Fisher', inStock: true }
];

const foundBook = books.find((book)=>{
    if(book.inStock === true){
        return true;
    }
});

if (foundBook === undefined) {
    console.log('Sike no book for u mate');
} else {
    console.log('first book in stock:', foundBook);
}

// refactored version
// const books = [
//     { title: 'Building a Spaceship', inStock: false },
//     { title: 'Growing Orchids', inStock: false },
//     { title: 'River Fisher', inStock: true }
// ];

// const foundBook = books.find(({ inStock})=> inStock);
// if(!foundBook) {
//     console.log('no books');
// } else {
//     console.log("first book:", foundBook)
// };
