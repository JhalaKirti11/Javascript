let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("p1 reject")
    }, 1000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => { reject("p2 executed") }, 2000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve("p3 executed") }, 3000);
});

Promise.all([p1, p2, p3])
    .then((result) => {
        console.log("all executed ", result);
    })
    .catch((error) => {
        console.log("any one promise rejected", error)
    });
