/*  Input: arr[] = {1, 4, 0, 0, 3, 10, 5}, sum = 7
Output: 2 5
Explanation: Sum of elements between indices 2 and 5 is 4 + 0 + 0 + 3 = 7       */

let arr = [15, 2, 4, 8, 9, 5, 10, 23];
let check = 23;
let sum = 0;
let start =0;
let end = 0;
for(let i = 0; i< arr.length; i++){
    let s = 0;
    let j = i;
    while(j< arr.length){
        s = s+arr[j];
       if(s >= check)
            break;
            j++;
    }
    if(s==check){
        start = i;
        end = j;
        break;
    }
}
console.log("start : ", start);
console.log("end : ", end);
