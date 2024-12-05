/*  Given an array of integers, write a function that returns the maximum product
that can be obtained by multiplying two distinct numbers from the array.
*/

let arr = [2, 4, 7, 1, 9];
let product = [];
let k = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        k = arr[i] * arr[j];
        product.push(k);
    }  
}
console.log(product);

let max = 0;
for(let i of product){
    if(i> max){
        max = i;
    }
}
console.log("The maximum product is "+max);
