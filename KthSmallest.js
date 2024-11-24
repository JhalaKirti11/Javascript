// Find the kth smallest number :

let arr = [2, 4, 6, 8, 3, 5, 4, 1, 9];
let sm = 5;
for (let i = 0; i < sm; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] < arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(sm, "th smallest elementt is ", arr[arr.length - sm]);
console.log(arr);
