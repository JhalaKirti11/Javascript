/*  Given an array Arr[] that contains N integers (may be positive, negative or zero). Find the product of the maximum product subarray.
Example 1:
Input:
N = 5
Arr[] = {6, -3, -10, 0, 2}
Output: 180
Explanation: Subarray with maximum product
is [6, -3, -10] which gives product as 180.     */

let arr = [6, -3, -10, 0, 2];
let pro = 1;

for (let i = 0; i < arr.length; i++) {
    let ar = [arr[i]];
    let k = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
        k = k * arr[j];
        ar.push(arr[j]);
        if (pro < k) {
            pro = k;
        }
    }
}
console.log("max product : " + pro);
