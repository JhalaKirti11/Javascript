function palindrome(m,n){
    let palArr = [];
    for(let i = 100; i<=200; i++){
        let temp = i;
        let res = 0;
        while(temp>0){
            let r = temp%10;
            res = res*10+r;
            temp= Math.floor(temp/10);
        }

        if(res==i){
            palArr.push(i);
        }
    }
    return palArr;
}

let m = 100;
let n = 200;
let result = palindrome(m, n);
console.log(result);
