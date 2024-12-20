function calculateFactors(n) {
    let arr = [];
    for (let i = 2; n > 1; i++) {
        if (n % i == 0) {
            arr.push(i);
            n = n / i;
            i = i - 1;
        }
    }
    return arr;
}


let a = 30;
let b = 10;
let c = 20;

let facA = calFactors(a);
let facB = calFactors(b);
let facC = calFactors(c);

console.log(`Factors of ${a} : ${facA}`);
console.log(`Factors of ${b} : ${facB}`);
console.log(`Factors of ${c} : ${facC}`);
