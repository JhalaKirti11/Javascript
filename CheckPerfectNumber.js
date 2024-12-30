let n = 28;
let per = false;
let arr = [];
let sum = 0;

for(let i =1; i<=n/2; i++){
    if(n%i == 0)
        sum+=i;

    if(sum ==n)
        per = true;
    }
    if(per)
        console.log(n + " is a perfect number.");
    else
        console.log(n + " is not a perfect number.");
