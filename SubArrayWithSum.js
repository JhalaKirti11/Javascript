let arr = [1, 4, 5, 20,-10, 3, 7];
let sum = 10;

let arr2 = [];

for (let i = 0; i < arr.length; i++) {
    let sum2 = arr[i];
    let arr3 = [arr[i]];
    for (let j = i + 1; j < arr.length; j++) {
        sum2 = sum2 + arr[j];
        arr3.push(arr[j]);
        if (sum2 == sum) {
            arr2.push(arr3);
            break;
        }
    }
}

console.log(arr2);
