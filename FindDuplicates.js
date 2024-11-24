// Find duplicates in an array :

let arr = [1,2,5,1,7,9,5,8,2];
for(let i = 0; i < arr.length; i++){
    let found = false;
    for(let j = i+1; j < arr.length; j++){
        if(arr[i] == arr[j]){
            found = true;
        }
    }
    if(found){
        console.log(arr[i]);
    }
}
