/*  Given a binary 2D array, where each row is sorted.
Find the row with the maximum number of 1s. 

Examples:
Input matrix : 0 1 1 1
               0 0 1 1
               1 1 1 1 
               0 0 0 0     */

let matrix = [[0, 1, 1, 1], [0, 1, 1, 1], [0, 1, 1, 1], [0, 0, 0, 0]];
console.log(matrix);

let max = 0;
let row = -1;
for(let i = 0; i< matrix.length; i++){
    let count = 0;
    for(let j = 0; j< matrix[i].length; j++){
        if(matrix[i][j] == 1){
            count++;
        }
    }
    if(count>max){
        max = count;
        row = i;
    }
}
console.log("maximum 1s in : ",row, " with ", max, " times");
