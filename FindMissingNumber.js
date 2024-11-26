/*  Given an array arr[] of size n-1 with integers in the range of [1, n],
the task is to find the missing number from the first N integers.

Input: arr[] = {1, 2, 4, 6, 3, 7, 8} , n = 8
Output: 5
Explanation: Here the size of the array is 8, so the range will be [1, 8].
The missing number between 1 to 8 is 5
*/

let arr = [1, 2, 4, 6, 3, 7, 8];
let n = 8;
    let mis = 0;
    for(let i = 0; i<n; i++){
        let f = false;
        let j = 0;
        while(j< arr.length){
            if(i+1 == arr[j]){
                f = true;
                break;
            }
            j++;
        }
        if(!f){
            console.log("mis : ", i+1);
        }
    }
