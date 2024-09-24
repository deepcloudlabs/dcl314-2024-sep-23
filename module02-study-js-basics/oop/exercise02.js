class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}

let circle1 = new Circle(0, 0, 1)
console.log(circle1.area())
