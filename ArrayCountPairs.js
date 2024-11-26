/*  Given an array arr[] of n integers and a target value, the task is to find the
number of pairs of integers in the array whose sum is equal to target.

Input: arr[] = {1, 5, 7, -1, 5}, target = 6
Output:  3
Explanation: Pairs with sum 6 are (1, 5), (7, -1) & (1, 5).       */

let arr = [1, 1, 1, 1];
let t = 2;
let count = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === t) {
            count++;
        }
    }
}
console.log(count);
