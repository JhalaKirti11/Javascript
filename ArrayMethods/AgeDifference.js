/*   Find the difference in age between the oldest and youngest family members,
and return their respective ages and the age difference.

output:- [13, 67, 54];      */


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

let arr2 = (input.map(a => a.age)).sort();

let maxAge = arr2[arr2.length - 1];
let minAge = arr2[0];
let d = maxAge - minAge;

console.log("Maximum age : ", maxAge, ", Minimum age : ", minAge, " Difference : ", d);
