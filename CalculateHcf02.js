
function calculateHcf(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

let a = 160;
let b = 252;
let c = 420;
let hcf1 = calculateHcf(a, b);
let hcf2 = calculateHcf(hcf1, c);
console.log(`HCF of ${a}, ${b}, and ${c} is ${hcf2}`);
