const input = "Every developer likes to mix kubernetes and javascript";
let arr = input.split(" ");
let arr2 = arr.map((a) => {
    if (a.length >= 4) {
        let k = a.length -2;
        return a[0] + k+ a[a.length - 1];
    }else{
        return a; 
    }
});
console.log(arr2);
