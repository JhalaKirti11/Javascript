let ob1 = {
    name: "Shreya",
    age: 20,
    address: "Sehore",
    mail: function (country) {
        console.log(`the name is ${this.name} and age is ${this.age} and ${country}`);
    }
}
let ob2 = {
    name: "Riya",
    age: 22,
    address: "Indore"
}

console.log("call() : ")
ob1.mail.call(ob2, "India");                    //the name is riya and age is 22 and India
ob1.mail.call(null, "USA");                     // the name is undefined and age is undefined and USA
ob1.mail("Spain");                              // the name is shreya and age is 20 and Spain
