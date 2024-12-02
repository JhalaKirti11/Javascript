/*  Input: a[] = {1, 1, 2, 2, 2, 4}, b[] = {2, 2, 4, 4}
unoion :    Output: {1, 2, 4}
Explanation: 1, 2 and 4 are the distinct elements present in either array.  */

let arr1 = [1, 1, 2, 2, 2, 4];
let arr2 = [2, 2, 4, 4];
let union = [];
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
     //   for (let k = 0; k <= union.length; k++) {
            if(arr1[i] === arr2[j]  && !(union.includes(arr1[i]))){
                union.push(arr2[j]);
            }
    }
}
console.log(union);
