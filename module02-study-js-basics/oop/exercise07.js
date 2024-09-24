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

let circle2 = new Circle(5,5,100);
let circle3 = new Circle(15,15,200);
console.log(JSON.stringify(circle2));
console.log(JSON.stringify(circle3));
circle2.color = "Blue";
console.log("After coloring circle2");
console.log(JSON.stringify(circle2));
console.log(JSON.stringify(circle3));

