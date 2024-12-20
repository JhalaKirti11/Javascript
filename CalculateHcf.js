
function calculateHcf(a, b) {
    let hcf = 1;
    let smaller = Math.min(a, b);

    for (let i = 1; i <= smaller; i++) {
        if (a % i === 0 && b % i === 0) {
            hcf = i;  // Update HCF
        }
    }
    return hcf;
}

let a = 10;
let b = 98;
let hcf = calculateHcf(a, b);
console.log("HCF of", a, "and", b, "is:", hcf);
