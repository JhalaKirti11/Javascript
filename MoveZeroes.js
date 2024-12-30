/*  Move Zeroes to End:
Write a program to move all zeroes in the array to the end
while maintaining the relative order of the non-zero elements.
*/

let arr = [1,0,0,55,3,0,8,4,0,];
for(let i = 0; i<arr.length; i++){
    for(let j = 0; j<arr.length-1; j++){
        if(arr[j]===0){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(arr);
