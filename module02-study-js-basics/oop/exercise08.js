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
Circle.prototype.color = "Blue";
console.log("After coloring Circle");
console.log(JSON.stringify(circle2));
console.log(JSON.stringify(circle3));
console.log(circle2.hasOwnProperty("radius"));
console.log(circle3.hasOwnProperty("radius"));
circle2.color = "Red";
console.log(circle2.hasOwnProperty("color"));
console.log(circle3.hasOwnProperty("color"));
delete Circle.prototype.color;
console.log(circle2.color);
console.log(circle3.color);

