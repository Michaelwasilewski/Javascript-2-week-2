const values = [100, 200, 300, 400, 500];

function callbackFn(element, index, array) {
  // modify and return element here
}
const neArray = values.map(callbackFn);

// map
const names = [
  { firstName: "Ola", lastName: "Nordmann" },
  { firstName: "John", lastName: "Doe" },
  { firstName: "Mario", lastName: "Rossi" },
  { firstName: "Jan", lastName: "Jansen" },
];
console.log("Before map", names);

// return:
// ["Ola Nordmann", "John Doe"..]

const combinedNames = names.map(({ firstName, lastName }) => {
  return `${firstName} ${lastName}`;
});
console.log("After map", combinedNames);

const triangle = [
  { base: 100, height: 200 },
  { base: 50, height: 100 },
  { base: 600, height: 700 },
];

//   const areas = triangle.map((triangle) => triangle.base * triangle.height /2);
//   console.log(areas);
const newTriangle = triangle.map(({ base, height }) => {
  return 0.5 * base * height;
});
console.log(newTriangle);
