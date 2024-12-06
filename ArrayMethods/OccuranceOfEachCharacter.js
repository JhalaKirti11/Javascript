/* 7. Count the occurrences of distinct elements in the given 2D array.
The given input is an array, the elements of which are arrays of strings.
The result is an object whose property names are the values from the arrays
and their value is the number of their occurrences.

const input = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];
output:   {
    a: 1,
    b: 1,
    c: 2,
    d: 2,
    f: 2,
    g: 1,
  }                           */

    const input = [
        ["a", "b", "c"],
        ["c", "d", "f"],
        ["d", "c", "a"],
      ];

  let arr = input.flat();
    console.log(arr);
    let appear = {};
      arr.forEach((item) =>{
        if(appear[item]){
            appear[item]++;
        }else{
            appear[item] = 1;
        }
      });
      console.log(appear);
