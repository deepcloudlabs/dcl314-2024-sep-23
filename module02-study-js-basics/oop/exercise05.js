class Circle {
    #x;
    #y;
    #radius;
    constructor(x, y, radius) {
        this.#x = x;
        this.#y = y;
        this.#radius = radius;
    }

    area = () => {
        return Math.PI * this.#radius ** 2;
    }
    circumference = () => {
        return 2.0 * Math.PI * this.#radius;
    }
}

let circle2 = new Circle(0,0,1);
// Error
// SyntaxError: Private field '#radius' must be declared in an enclosing class
// circle2.#radius = -100;
console.log(circle2.circumference());
