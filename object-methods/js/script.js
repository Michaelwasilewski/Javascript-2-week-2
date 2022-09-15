// // object
const person ={
    firstName: 'Mike',
    lastName:'Wasiu',
    age: '28',
};

// 1. dot notation
console.log(person.age)
console.log(person.lastName)

// 2. bracket notation

console.log("bracket notation", person["firstName"]);
console.log("bracket notation", person["lastName"]);

const recipe = {
    ingredient_0: 'Egg',
    ingredient_1: 'Milk',
    ingredient_2: 'Flour',
  };

//   const ingredient0 = recipe['ingredient_' + 0];

for(let i =0; i <= 2; i++){
    console.log(recipe["ingredient_" + i]);
}

// for...in loop
// const persons = {
//     firstName: 'Ola',
//     lastName: 'Nordmann',
//     module: 'JavaScript',
//   };

//   for ( const theKey in persons) {
//     console.log(persons[key])
//   }


const carProfile = {
    mark: 'bwm',
    year: 2015,
    vinNumber: 23123,
}

for(const theKey in carProfile) {
    console.log("key", theKey, 'value:', carProfile[theKey]);
};

const persone = {
    firstName: 'Mike',
    lastName: 'killa',
    module: 'JavaScript',
}
const keysArray = Object.keys(persone);
console.log(keysArray);