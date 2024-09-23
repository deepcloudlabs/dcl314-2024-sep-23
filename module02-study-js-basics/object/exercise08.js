let my_circle = {
    x: 1,
    y: 0,
    radius: 100,
    pen: {
        color: "red",
        thickness: 7,
        style: "solid"
    }
};
// deep cloning
let your_circle = JSON.parse(JSON.stringify(my_circle));
your_circle.radius = 5;
your_circle.pen.color = "blue";
console.log(`my_circle.radius: ${my_circle.radius}`);
console.log(`your_circle.radius: ${your_circle.radius}`);
console.log(`my_circle.pen.color: ${my_circle.pen.color}`);
console.log(`your_circle.pen.color: ${your_circle.pen.color}`);
