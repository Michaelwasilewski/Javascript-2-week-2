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

const job = {
    position: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";
        console.log(`the ${this.position} position is ${this.type} and ${accepting}`);
    }
}
const barista = Object.create(job);
barista.position = "barista";
barista.showDetails();

const employees = {
    boss: 'Michael',
    secretary: 'Pam',
    sales: "jim",
    accountant: 'oscar',
};

// get the keys of the object 
const keys = Object.keys(employees);
console.log(keys);
// iterate through the keys
Object.keys(employees).forEach(key => {
    let value = employees[key];
    console.log(`${key}: ${value}`);
});

// get the length of the keys 
const lenght = Object.keys(employees).length;
console.log(lenght);


// Object.values()

// initialize an object
const session = {
    id: 1,
    time:`16-September-2022`,
    device: 'mobile',
    browser: 'Chrome',
};

// get all the values of the object
const value = Object.values(session);

console.log(value);

// object.entries() creates a nested array of the key/value pairs of an object.

// initialize an object 
const operatingSystem = {
    name: "ubuntu",
    version: 18.04,
    licence: 'Open Source',
};

// get the object key/value pairs
const entries = Object.entries(operatingSystem);
console.log(entries);

// loop through the results 
entries.forEach(entry => {
    let key = entry[0];
    let value = entry[1];

    console.log(`${key}: ${value}`);
});


// Object.entries() method only return the object instance's own properties, and not 
// any properties that may be inherited through its prototype

// Object.assign() is used to copy values from one object to another.
// We can create two objects, and merge them with Object.assing()


// initialize an object
// const name = {
//     firstName: 'phillip',
//     lastName:'Fry',
// };
// // initialize another object

// const details = {
//     job:'Delivery boy',
//     employer: 'Planet Express'
// };

// merge the objects
// const character = Object.assign(name, details);
// console.log(character);

// It is also possible to use the spread operator (...) to accomplish the same task
// Code below will modify how we declare character through merging the name and details objects.

// Initialize an object
const name = {
    firstName: 'Philip',
    lastName: 'Fry'
};

// Initialize another object
const details = {
    job: 'Delivery Boy',
    employer: 'Planet Express'
};
// merge the object with the spread operator

// this spread syntax in objects literals is also known as shallow-cloning.
const character = {...name, ...details}
console.log(character)

// object.freeze()
// prevents modification to properties and values of an object
// and prevents properties from being added or removed from an object.

const user = {
    username: "Dragonking77",
    password: "Dragonlord77"
};

// freeze the object 

const newUser = Object.freeze(user);

newUser.password = '******';
newUser.active = true;
console.log(newUser);

// object.seal() 
// prevents new properties from being added to an object,
//  but allows the modification of existing properties
// similar to Object.freeze()

const bruker = {
    username: "Brukernavn",
    password: 'killakilla'
};
// seal the object
const nyBruker = Object.seal(bruker);
nyBruker.password ='******';
nyBruker.active = true;
// active property not added to the sealed object, but password changed successfully

console.log(nyBruker);

// Object.getProtofypeOf() is used to get the internal hidden [[prototype]]
// of an object, also accessible through the __proto__ property

const ansatte =['Gunnar', 'Gudrun', 'Laila', 'bernt', 'Geir'];
Object.getPrototypeOf(ansatte);

Object.getPrototypeOf(ansatte) === Array.prototype;