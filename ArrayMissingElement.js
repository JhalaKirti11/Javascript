/* 5.Find the Missing Number:
Given an array containing n-1 distinct numbers taken from the range 1 to n,
write a program to find the missing number.*/

let arr = [1,2,4,5,7,8,10];
for(let i = 0; i < arr.length-1; i++){
    if(arr[i] != arr[i+1]-1){
        console.log(arr[i]+1, " is missing!");
    }
}
