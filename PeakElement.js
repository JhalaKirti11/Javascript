/*  Given an unsorted array, find a peak element in it. An element is considered to be peak
if its value is greater than or equal to the values of its adjacent elements (if they exist).
There can be more than one peak elements in an array, we return any of them,
Note: If the array is increasing then just print the last element will be the maximum value.
Example:

Input: arr[]= {5, 10, 20, 15}
Output: 20
Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20.         */

let arr = [10, 90, 15, 2, 23, 100, 90];
let p = 0;
for (let i = 0; i < arr.length -1; i++) {
    if (arr[i] < arr[i + 1] && arr[i + 1] > arr[i + 2]) {
        p = arr[i + 1];
        break;
    } else if (arr[i] > arr[i + 1]) {
        p = arr[i];
    } else if (arr[i] < arr[i + 1]) {
        p = arr[i = 1];
    }
}
console.log(p);
