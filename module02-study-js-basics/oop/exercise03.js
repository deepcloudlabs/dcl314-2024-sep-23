class Employee {
    constructor(name) {
        this.name = name;
        this.sayHello = this.sayHello.bind(this);
    }

    sayHello() {
        console.log(JSON.stringify(this));
        console.log(`Hello, ${this.name}!`);
    }
}

let jack = new Employee("jack bauer");
jack.sayHello(); // sayHello(jack)
setInterval(jack.sayHello, 3_000);
