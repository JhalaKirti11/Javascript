/*  The given input is a string of multiple words with a single space between each of them.
    Abbreviate the name and return the name initials.

    const input = "George Raymond Richard Martin";
    output :- "GRRM";  */

const input = "George Raymond Richard Martin";
let arr = input.split(" ");

let k = arr.map((a) => a.charAt(0));
let a = k.join('');

console.log(a);
