const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];

let arr2 = input.map(a => a.age);

let maxAge = Math.max(...arr2);
let minAge = Math.min(...arr2);
let d = maxAge - minAge;

console.log("maximum age : ", maxAge, ", minimum age : ", minAge, ", and their difference : ", d);
