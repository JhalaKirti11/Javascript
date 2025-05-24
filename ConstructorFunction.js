function Person(name) {
    this.name = name;
    this.greet = function() {
      setTimeout(() => {
        console.log(`Hello, my name is ${this.name}`);
      }, 1000);
    };
  }
  
  const person = new Person('Alice');
  person.greet();
