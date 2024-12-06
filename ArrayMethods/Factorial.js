/*  6. If the given input is a number, you should return the factorial of that number.
The factorial of a natural number n is the product of the positive integers less than or equal to n.
So, 2! = 2, 3! = 6, 4! = 24 and so on.

const input = 6;
output: 720
*/

let n = 5;
let k = n.reduce((acc,x) =>{
    if(x ==1 || x == 0){
      return  acc = 1;
    }else{
        acc = acc* x;
       return x--;
    }
},n);
console.log(k);
