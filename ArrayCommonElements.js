/*  Input: A[] = {1, 5, 10, 20, 30} , B[] = {5, 13, 15, 20}, C[] = {5, 20} 
Output: 5 20
Explanation: 5 and 20 are common in all the arrays.     */

let a = [1, 5, 10, 20, 30];
let b = [5, 13, 15, 20];
let c = [5,20];

for(let i = 0; i< a.length; i++){
    for(let j = 0; j< b.length; j++){
        for(let k = 0; k< c.length; k++){
            if(a[i] === b[j] && a[i] === c[k]){
                console.log("common : ", c[k]);
            }
        }
    }
}
