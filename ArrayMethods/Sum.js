/*  2.If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.

const input = [1, -4, 12, 0, -3, 29, -150];
output :- 42;   */


const input = [1,2,3,4];

let arr2 = input.reduce((sum, x)=>  sum+x,0);
console.log(arr2);
