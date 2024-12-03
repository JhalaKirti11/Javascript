let ob1 = {
    name: "shreya",
    age: 20,
    address: "sehore",
    mail: function () {
        console.log(`the name is ${this.name} and age is ${this.age}`);
    }
}
let ob2 = {
    name: "riya",
    age: 22,
    address: "indore"
}

console.log("call() : ")
ob1.mail.call(ob2);                      // the name is riya and age is 22
ob1.mail.call(null);                     // the name is undefined and age is undefined
ob1.mail();                              // the name is shreya and age is 20
