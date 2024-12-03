let ob1 = {
    name: "Shreya",
    age: 20,
    address: "Sehore",
    mail: function (country) {
        console.log(`The name is ${this.name} and age is ${this.age} and ${country}`);
    }
}
let ob2 = {
    name: "Riya",
    age: 22,
    address: "Indore"
}
console.log("apply() : ")
ob1.mail.apply(ob2, ["South Korea"]);       // The name is Riya and age is 22 and South Korea
ob1.mail(["China"]);                        // The name is Shreya and age is 20 and China
