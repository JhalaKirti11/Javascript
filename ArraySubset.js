/*  Given two arrays arr1[] and arr2[] of size m and n respectively,
the task is to determine whether arr2[] is a subset of arr1[].
Both arrays are not sorted, and elements are distinct.

Examples: 

Input: arr1[] = {11, 1, 13, 21, 3, 7}, arr2[] = {11, 3, 7, 1} 
Output: Yes         */


let arr1 = [11, 1, 13, 21, 3, 7]
let arr2 = [11, 21, 7, 1];
    let sub = true;
    for(let i = 0; i< arr2.length; i++){
        let f = false;
        for(let j = 0; j< arr1.length; j++){
            if(arr2[i] === arr1[j]){
                f = true;
                break;
            }
        }
        if(!f){
            sub = f;
            break;
        }
    }

    if(sub){
        console.log("Yes");
    }else{
        console.log("No");
    }
